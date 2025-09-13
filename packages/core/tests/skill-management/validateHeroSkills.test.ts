import { describe, it, expect } from 'vitest';
import { validateHeroSkills, AcquiredHeroSkill } from '../../src/skill-management/validateHeroSkills';

describe('validateHeroSkills', () => {
    it('完全なスキル情報セットで合計レベルが7を超えない場合は有効であること', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'オリジナルスキル1',
          level: 2,
          maxLevel: 5,
          timing: 'メジャーアクション',
          skill: '白兵攻撃',
          target: '単体',
          range: '武器',
          cost: 4,
          effect: '対象に白兵攻撃を行う。コンボ２。'
        },
        {
          name: 'オリジナルスキル2',
          level: 3,
          maxLevel: 5,
          timing: 'セットアップ',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 3,
          effect: 'そのシーン中、パワー判定に+30%'
        },
        {
          name: 'オリジナルスキル3',
          level: 2,
          maxLevel: 5,
          timing: 'パッシブ',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 0,
          effect: 'HPに+[Lv×5]する'
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(true);
      expect(result.totalLevel).toBe(7);
    });

    it('合計レベルが7を超える場合は無効であること', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'オリジナルスキル1',
          level: 4,
          maxLevel: 5
        },
        {
          name: 'オリジナルスキル2',
          level: 4,
          maxLevel: 5
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(false);
      expect(result.totalLevel).toBe(8);
    });

    it('空のスキルは寛容に処理されること', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {}, // 空のスキル
        {
          name: 'カスタムスキル1',
          level: 3,
          maxLevel: 5
        },
        {
          name: '', // 空の名前
          level: 2
        },
        {
          name: 'カスタムスキル2',
          level: 0 // レベル0
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(true);
      expect(result.totalLevel).toBe(3); // カスタムスキル1 Lv3のみカウント
    });

    it('maxLevelが設定されている場合、最大レベルを超えると無効であること', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'カスタムスキル',
          level: 2,
          maxLevel: 1 // 最大Lv1だが、Lv2を指定（制限超過）
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('カスタムスキル: 最大レベル1を超えています（指定レベル: 2）');
    });

    it('maxLevelが未設定の場合、任意のレベルで有効であること（拡張性重視）', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'オリジナルスキル1',
          level: 10 // maxLevel未設定なので制限なし
        },
        {
          name: 'オリジナルスキル2',
          level: 5 // maxLevel未設定なので制限なし
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(false); // 合計15Lv > 7Lvなので無効
      expect(result.totalLevel).toBe(15);
      expect(result.errors).toHaveLength(0); // レベル制約エラーはなし
    });

    it('混合クラススキルも検証可能であること（拡張性重視）', () => {
      // マッスル + テクノロジーの混合スキル選択（拡張可能性を確保）
      const selectedClasses = ['マッスル', 'テクノロジー'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'フィジカルブースト',
          level: 2,
          maxLevel: 5
        },
        {
          name: 'テックツール',
          level: 1,
          maxLevel: 3
        },
        {
          name: 'ハイブリッドスキル',
          level: 4,
          maxLevel: 5
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(true);
      expect(result.totalLevel).toBe(7);
    });
});