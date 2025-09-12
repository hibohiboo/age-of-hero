import { describe, it, expect } from 'vitest';
import { validateHeroSkills } from '../../src/skill-management/validateHeroSkills';

describe('validateHeroSkills', () => {
  it('合計レベルが7を超えない場合は有効であること', () => {
    // パワードライブLv2 + マッスルチャージLv3 + バイタルアップLv2 = 7Lv（制限内）
    const selectedClasses = ['マッスル', 'マッスル'] as const;
    const heroSkills = {
      パワードライブ: 2,
      マッスルチャージ: 3,
      バイタルアップ: 2,
    };
    
    const result = validateHeroSkills(selectedClasses, heroSkills);
    
    expect(result.isValid).toBe(true);
    expect(result.totalLevel).toBe(7);
  });

  it('合計レベルが7を超える場合は無効であること', () => {
    // パワードライブLv3 + マッスルチャージLv3 + バイタルアップLv3 = 9Lv（制限超過）
    const selectedClasses = ['マッスル', 'マッスル'] as const;
    const heroSkills = {
      パワードライブ: 3,
      マッスルチャージ: 3,
      バイタルアップ: 3,
    };
    
    const result = validateHeroSkills(selectedClasses, heroSkills);
    
    expect(result.isValid).toBe(false);
    expect(result.totalLevel).toBe(9);
  });

  it('スキルの最大レベルを超える場合は無効であること', () => {
    // ボディウォールは最大Lv1だが、Lv2を指定（制限超過）
    const selectedClasses = ['マッスル', 'マッスル'] as const;
    const heroSkills = {
      ボディウォール: 2, // 最大Lv1を超過
    };
    
    const result = validateHeroSkills(selectedClasses, heroSkills);
    
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('ボディウォール: 最大レベル1を超えています（指定レベル: 2）');
  });
});