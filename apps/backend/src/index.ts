import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use(
  '*',
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://age-of-hero.hibohiboo66-cloudflare.workers.dev']
        : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  }),
);

// Health check
app.get('/health', (c) =>
  c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
  }),
);

// API routes placeholder
app.get('/api/game-data', (c) =>
  c.json({ 
    classes: []
  }),
);

const port = Number(process.env.PORT) || 3001;

console.log(`🚀 Backend server running on port ${port}`);

export default {
  port,
  fetch: app.fetch,
};
