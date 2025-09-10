import { describe, it, expect } from 'vitest';
import { validateCreateCharacter, type CreateCharacterRequest } from './character';

describe('validateCreateCharacter', () => {
  // 有効なテストデータ
  const validCharacterData: CreateCharacterRequest = {
    name: '山田太郎',
    selectedClasses: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002'],
    skillAllocations: {
      '550e8400-e29b-41d4-a716-446655440003': 20,
      '550e8400-e29b-41d4-a716-446655440004': 30,
    },
    heroSkills: [
      {
        id: '550e8400-e29b-41d4-a716-446655440005',
        level: 3,
      },
    ],
    specialAttacks: [
      {
        id: '550e8400-e29b-41d4-a716-446655440006',
        level: 1,
      },
    ],
    items: ['550e8400-e29b-41d4-a716-446655440007'],
  };

  describe('正常系', () => {
    it('有効なデータで成功すること', () => {
      const result = validateCreateCharacter(validCharacterData);
      
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('山田太郎');
        expect(result.data.selectedClasses).toHaveLength(2);
      }
    });

    it('パスワードがnullでも成功すること', () => {
      const dataWithNullPassword = { ...validCharacterData, password: null };
      const result = validateCreateCharacter(dataWithNullPassword);
      
      expect(result.success).toBe(true);
    });

    it('パスワードが文字列でも成功すること', () => {
      const dataWithPassword = { ...validCharacterData, password: 'secret123' };
      const result = validateCreateCharacter(dataWithPassword);
      
      expect(result.success).toBe(true);
    });
  });

  describe('バリデーション失敗', () => {
    describe('name', () => {
      it('nameが空文字の場合は失敗すること', () => {
        const invalidData = { ...validCharacterData, name: '' };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.code).toBe('VALIDATION_ERROR');
          expect(result.error.details).toContainEqual({
            field: 'name',
            message: 'name は必須です'
          });
        }
      });

      it('nameが51文字以上の場合は失敗すること', () => {
        const longName = 'あ'.repeat(51);
        const invalidData = { ...validCharacterData, name: longName };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details).toContainEqual({
            field: 'name',
            message: 'name は50文字以内で入力してください'
          });
        }
      });

      it('nameがundefinedの場合は失敗すること', () => {
        const { name, ...invalidData } = validCharacterData;
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details.some(d => d.field === 'name')).toBe(true);
        }
      });
    });

    describe('selectedClasses', () => {
      it('selectedClassesが1個の場合は失敗すること', () => {
        const invalidData = { 
          ...validCharacterData, 
          selectedClasses: ['550e8400-e29b-41d4-a716-446655440001'] 
        };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details).toContainEqual({
            field: 'selectedClasses',
            message: 'クラスは正確に2つ選択してください'
          });
        }
      });

      it('selectedClassesが3個の場合は失敗すること', () => {
        const invalidData = { 
          ...validCharacterData, 
          selectedClasses: [
            '550e8400-e29b-41d4-a716-446655440001',
            '550e8400-e29b-41d4-a716-446655440002', 
            '550e8400-e29b-41d4-a716-446655440003'
          ] 
        };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details).toContainEqual({
            field: 'selectedClasses',
            message: 'クラスは正確に2つ選択してください'
          });
        }
      });

      it('selectedClassesに不正なUUIDが含まれる場合は失敗すること', () => {
        const invalidData = { 
          ...validCharacterData, 
          selectedClasses: ['invalid-uuid', '550e8400-e29b-41d4-a716-446655440002'] 
        };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details).toContainEqual({
            field: 'selectedClasses.0',
            message: '不正なクラスIDです'
          });
        }
      });
    });

    describe('skillAllocations', () => {
      it('skillAllocationsに負の値が含まれる場合は失敗すること', () => {
        const invalidData = { 
          ...validCharacterData, 
          skillAllocations: {
            '550e8400-e29b-41d4-a716-446655440003': -10,
            '550e8400-e29b-41d4-a716-446655440004': 30,
          }
        };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details.some(d => 
            d.field.includes('skillAllocations') && 
            d.message.includes('0以上')
          )).toBe(true);
        }
      });
    });

    describe('heroSkills', () => {
      it('heroSkillsのlevelが0以下の場合は失敗すること', () => {
        const invalidData = { 
          ...validCharacterData, 
          heroSkills: [{
            id: '550e8400-e29b-41d4-a716-446655440005',
            level: 0
          }]
        };
        const result = validateCreateCharacter(invalidData);
        
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.details).toContainEqual({
            field: 'heroSkills.0.level',
            message: 'ヒーロースキルレベルは1以上で入力してください'
          });
        }
      });
    });
  });
});