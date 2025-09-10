import { describe, it, expect } from 'vitest';
import app from '../../src/index';

describe('GET /api/game-data', () => {
  it('ステータス200を返すこと', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
    });

    const res = await app.fetch(req);

    expect(res.status).toBe(200);
  });

  it('classes配列が含まれること', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
    });

    const res = await app.fetch(req);
    const data = (await res.json()) as any;

    expect(data).toHaveProperty('classes');
    expect(Array.isArray(data.classes)).toBe(true);
  });

  it('skills配列が含まれること', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
    });

    const res = await app.fetch(req);
    const data = (await res.json()) as any;

    expect(data).toHaveProperty('skills');
    expect(Array.isArray(data.skills)).toBe(true);
  });

  it('heroSkills配列が含まれること', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
    });

    const res = await app.fetch(req);
    const data = (await res.json()) as any;

    expect(data).toHaveProperty('heroSkills');
    expect(Array.isArray(data.heroSkills)).toBe(true);
  });
});
