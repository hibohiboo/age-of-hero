import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import app from '../../src/index';
import {
  setupTestDatabase,
  teardownTestDatabase,
  cleanupTestData,
} from '../setup/database';

describe('PUT /api/characters/{id} - TDD Step 1', () => {
  // テスト用データベースのセットアップ
  beforeAll(async () => {
    await setupTestDatabase();
  }, 60000);

  afterAll(async () => {
    await teardownTestDatabase();
  });

  beforeEach(async () => {
    await cleanupTestData();
  });

  // テストヘルパー関数
  const createCharacter = async (characterData: any) => {
    const req = new Request('http://localhost/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(characterData),
    });
    return app.fetch(req);
  };

  const updateCharacter = async (id: string, sessionData: any) => {
    const req = new Request(`http://localhost/api/characters/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sessionData),
    });
    return app.fetch(req);
  };

  // 基本的なキャラクターデータ
  const basicCharacterData = {
    name: '山田太郎',
    selectedClasses: ['マッスル', 'バイオ'],
    skillAllocations: {
      'パワー': 20,
      'タフネス': 30,
    },
    heroSkills: [
      {
        id: 'パワードライブ',
        level: 3,
      },
    ],
    specialAttacks: [
      {
        id: 'パワースラッシュ',
        level: 1,
      },
    ],
    items: ['射撃武器（小）', 'ブレード（小）'],
    sessions: [],
  };

  // セッション追加データ
  const sessionData = {
    session: {
      sessionName: 'テストセッション',
      gmName: 'GM太郎',
      sessionDate: '2025-09-12',
      currentHp: 25,
      currentSp: 15,
      experiencePoints: 10
    }
  };

  describe('正常系', () => {
    it('ステータス200を返すこと', async () => {
      // キャラクターを作成
      const createRes = await createCharacter(basicCharacterData);
      const createData = (await createRes.json()) as any;

      // セッション情報を追加
      const res = await updateCharacter(createData.id, sessionData);
      expect(res.status).toBe(200);
    });

    it('セッション情報を追加できること', async () => {
      // キャラクターを作成
      const createRes = await createCharacter(basicCharacterData);
      const createData = (await createRes.json()) as any;

      // セッション情報を追加
      const updateRes = await updateCharacter(createData.id, sessionData);
      const updateData = (await updateRes.json()) as any;

      expect(updateRes.status).toBe(200);
      expect(updateData).toHaveProperty('sessions');
      expect(Array.isArray(updateData.sessions)).toBe(true);
      expect(updateData.sessions).toHaveLength(1);
      expect(updateData.sessions[0]).toMatchObject({
        sessionName: 'テストセッション',
        gmName: 'GM太郎',
        sessionDate: '2025-09-12',
        currentHp: 25,
        currentSp: 15,
        experiencePoints: 10
      });
      expect(updateData.sessions[0]).toHaveProperty('id');
      expect(updateData.sessions[0]).toHaveProperty('createdAt');
    });
  });
});