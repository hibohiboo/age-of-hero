import { describe, it, expect } from 'vitest';
import app from '../../src/index';

describe('GET /api/game-data - 契約テスト', () => {
  it('ゲームデータ取得APIが正常なレスポンスを返すこと', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
    });

    const res = await app.fetch(req);

    // ステータスコード
    expect(res.status).toBe(200);

    // Content-Type
    expect(res.headers.get('content-type')).toContain('application/json');

    // レスポンスボディ
    const data = await res.json();

    // 必須フィールドの存在チェック
    expect(data).toHaveProperty('classes');
    expect(data).toHaveProperty('skills');
    expect(data).toHaveProperty('heroSkills');
    expect(data).toHaveProperty('items');

    // クラスデータの構造チェック
    expect(Array.isArray(data.classes)).toBe(true);
    if (data.classes.length > 0) {
      const classData = data.classes[0];
      expect(classData).toHaveProperty('id');
      expect(classData).toHaveProperty('name');
      expect(classData).toHaveProperty('physicalBase');
      expect(classData).toHaveProperty('reflexBase');
      expect(classData).toHaveProperty('sensoryBase');
      expect(classData).toHaveProperty('intellectualBase');
      expect(classData).toHaveProperty('supernaturalBase');
      expect(classData).toHaveProperty('hpBase');
      expect(classData).toHaveProperty('spBase');
      expect(classData).toHaveProperty('description');
    }

    // スキルデータの構造チェック
    expect(Array.isArray(data.skills)).toBe(true);
    if (data.skills.length > 0) {
      const skillData = data.skills[0];
      expect(skillData).toHaveProperty('id');
      expect(skillData).toHaveProperty('name');
      expect(skillData).toHaveProperty('category');
      expect(skillData).toHaveProperty('description');
      expect(skillData).toHaveProperty('order');
      
      // カテゴリの妥当性チェック
      expect(['physical', 'reflex', 'sensory', 'intellectual']).toContain(skillData.category);
    }

    // ヒーロースキルデータの構造チェック
    expect(Array.isArray(data.heroSkills)).toBe(true);
    if (data.heroSkills.length > 0) {
      const heroSkillData = data.heroSkills[0];
      expect(heroSkillData).toHaveProperty('id');
      expect(heroSkillData).toHaveProperty('name');
      expect(heroSkillData).toHaveProperty('maxLevel');
      expect(heroSkillData).toHaveProperty('timing');
      expect(heroSkillData).toHaveProperty('skill');
      expect(heroSkillData).toHaveProperty('target');
      expect(heroSkillData).toHaveProperty('range');
      expect(heroSkillData).toHaveProperty('cost');
      expect(heroSkillData).toHaveProperty('effect');
      
      // 数値の妥当性チェック
      expect(typeof heroSkillData.maxLevel).toBe('number');
      expect(heroSkillData.maxLevel).toBeGreaterThan(0);
      expect(typeof heroSkillData.cost).toBe('number');
      expect(heroSkillData.cost).toBeGreaterThanOrEqual(0);
    }

    // アイテムデータの構造チェック
    expect(Array.isArray(data.items)).toBe(true);
    if (data.items.length > 0) {
      const itemData = data.items[0];
      expect(itemData).toHaveProperty('id');
      expect(itemData).toHaveProperty('name');
      expect(itemData).toHaveProperty('type');
      expect(itemData).toHaveProperty('skill');
      expect(itemData).toHaveProperty('modifier');
      expect(itemData).toHaveProperty('attackPower');
      expect(itemData).toHaveProperty('guardValue');
      expect(itemData).toHaveProperty('range');
      expect(itemData).toHaveProperty('price');
      expect(itemData).toHaveProperty('effect');
      
      // 価格の妥当性チェック
      expect(typeof itemData.price).toBe('number');
      expect(itemData.price).toBeGreaterThanOrEqual(0);
    }
  });

  it('CORS ヘッダーが適切に設定されていること', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'GET',
      headers: {
        'Origin': 'http://localhost:5173'
      }
    });

    const res = await app.fetch(req);

    expect(res.headers.get('Access-Control-Allow-Origin')).toBeTruthy();
  });

  it('不正なHTTPメソッドで405エラーを返すこと', async () => {
    const req = new Request('http://localhost/api/game-data', {
      method: 'POST',
    });

    const res = await app.fetch(req);

    expect(res.status).toBe(405);
  });
});