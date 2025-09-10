import { describe, it, expect } from 'vitest';
import app from '../../src/index';

describe('POST /api/characters', () => {
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

  // 基本的なキャラクターデータ
  const basicCharacterData = {
    name: "山田太郎",
    selectedClasses: [
      "class-uuid-1", 
      "class-uuid-2"
    ],
    skillAllocations: {
      "skill-uuid-1": 20,
      "skill-uuid-2": 30
    },
    heroSkills: [
      {
        id: "hero-skill-uuid-1",
        level: 3
      }
    ],
    specialAttacks: [
      {
        id: "special-attack-uuid-1", 
        level: 1
      }
    ],
    items: [
      "item-uuid-1",
      "item-uuid-2"
    ]
  };

  describe('正常系', () => {
    it('ステータス201を返すこと', async () => {
      const res = await createCharacter(basicCharacterData);
      expect(res.status).toBe(201);
    });

    it('作成されたキャラクターのidとurlを返すこと', async () => {
      const res = await createCharacter(basicCharacterData);
      const data = await res.json();
      
      expect(data).toHaveProperty('id');
      expect(data).toHaveProperty('url');
      expect(typeof data.id).toBe('string');
      expect(typeof data.url).toBe('string');
    });

    it('UUIDが正しい形式であること', async () => {
      const res = await createCharacter(basicCharacterData);
      const data = await res.json();
      
      // UUID v4 形式の正規表現
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(data.id).toMatch(uuidRegex);
    });
  });
});