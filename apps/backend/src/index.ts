import { createCharacterSchema } from '@age-of-hero/schemas';
import { zValidator } from '@hono/zod-validator';
import { eq } from 'drizzle-orm';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';
import { z } from 'zod';
import { GAME_DATA } from './data/game-data';
import { getDb } from './lib/db/connection';
import { characters } from './lib/db/schema';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use(
  '*',
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://age-of-hero.hibohiboo66-cloudflare.workers.dev']
        : '*', // テスト環境では全オリジンを許可
    credentials: true,
  }),
);

// エラーハンドリングミドルウェア
app.onError((err, c) => {
  // JSON parsing error
  if (err.message && err.message.includes('JSON')) {
    return c.json({ error: 'Invalid JSON format' }, 400);
  }
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  // その他のエラー
  console.error('Unexpected error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

// Health check
app.get('/health', (c) =>
  c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
  }),
);

// API routes placeholder
app.get('/api/game-data', (c) => c.json(GAME_DATA));

// Characters API
app.post(
  '/api/characters',
  zValidator('json', createCharacterSchema),
  async (c) => {
    // バリデーション済みのデータを取得
    const characterData = c.req.valid('json');

    // データベースに保存
    const [newCharacter] = await getDb()
      .insert(characters)
      .values({
        name: characterData.name,
        data: characterData,
      })
      .returning();

    const url = `/character/${newCharacter.id}`;

    return c.json({ id: newCharacter.id, url }, 201);
  },
);

// Get character by ID
app.get(
  '/api/characters/:id',
  zValidator(
    'param',
    z.object({
      id: z.string().uuid('Invalid ID format'),
    }),
  ),
  async (c) => {
    const { id } = c.req.valid('param');

    const [character] = await getDb()
      .select()
      .from(characters)
      .where(eq(characters.id, id));

    if (!character) {
      return c.json({ error: 'Character not found' }, 404);
    }

    const data = character.data as object;

    // キャラクター情報を返す（API仕様に合わせて構築）
    return c.json({
      id: character.id,
      name: character.name,
      createdAt: character.createdAt,
      updatedAt: character.updatedAt,
      ...data,
    });
  },
);

const port = Number(process.env.PORT) || 3001;

console.log(`🚀 Backend server running on port ${port}`);

export default {
  port,
  fetch: app.fetch,
};
