import { describe, it, expect } from 'vitest';
import app from '../../src/index';

describe('GET /api/game-data', () => {
  // テストヘルパー関数
  const fetchGameData = async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
    });
    return app.fetch(req);
  };

  it('ステータス200を返すこと', async () => {
    const res = await fetchGameData();
    expect(res.status).toBe(200);
  });

  it('Content-TypeがJSONであること', async () => {
    const res = await fetchGameData();
    expect(res.headers.get('content-type')).toContain('application/json');
  });

  // 必須フィールドの配列チェック
  it.each([
    ['classes'],
    ['skills'], 
    ['heroSkills'],
    ['items']
  ])('%s配列が含まれること', async (fieldName) => {
    const res = await fetchGameData();
    const data = (await res.json()) as any;
    
    expect(data).toHaveProperty(fieldName);
    expect(Array.isArray(data[fieldName])).toBe(true);
  });
});
