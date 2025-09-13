import { describe, it, expect } from 'vitest';
import { validateHeroSkills, AcquiredHeroSkill } from '../../src/skill-management/validateHeroSkills';

describe('validateHeroSkills', () => {
    it('完全なスキル情報セットで合計レベルが7を超えない場合は有効であること', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'パワードライブ',
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
          name: 'マッスルチャージ',
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
          name: 'バイタルアップ',
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
          name: 'パワードライブ',
          level: 4,
          maxLevel: 5
        },
        {
          name: 'マッスルチャージ',
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
          name: 'パワードライブ',
          level: 3,
          maxLevel: 5
        },
        {
          name: '', // 空の名前
          level: 2
        },
        {
          name: 'バイタルアップ',
          level: 0 // レベル0
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(true);
      expect(result.totalLevel).toBe(3); // パワードライブLv3のみカウント
    });

    it('スキルの最大レベルを超える場合は無効であること', () => {
      const selectedClasses = ['マッスル', 'マッスル'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'ボディウォール',
          level: 2, // 最大Lv1を超過
          maxLevel: 1
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('ボディウォール: 最大レベル1を超えています（指定レベル: 2）');
    });

    it('混合クラススキルも検証可能であること', () => {
      // マッスル + テクノロジーの混合スキル選択（拡張可能性を確保）
      const selectedClasses = ['マッスル', 'テクノロジー'] as const;
      const heroSkills: AcquiredHeroSkill[] = [
        {
          name: 'パワードライブ',
          level: 2,
          maxLevel: 5
        },
        {
          name: 'スペシャルツール',
          level: 1,
          maxLevel: 3
        },
        {
          name: 'バイタルアップ',
          level: 4,
          maxLevel: 5
        }
      ];
      
      const result = validateHeroSkills(selectedClasses, heroSkills);
      
      expect(result.isValid).toBe(true);
      expect(result.totalLevel).toBe(7);
    });
});