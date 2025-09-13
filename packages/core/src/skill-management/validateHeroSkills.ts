type ClassName = string;

// ヒーロースキル取得時の完全なデータ構造
export interface AcquiredHeroSkill {
  name?: string;
  level?: number;
  maxLevel?: number;
  timing?: string;
  skill?: string;
  target?: string;
  range?: string;
  cost?: number;
  effect?: string;
}

// ヒーロースキル選択データ（配列形式）
type HeroSkillSelection = AcquiredHeroSkill[];

export function validateHeroSkills(
  selectedClasses: readonly [ClassName, ClassName],
  heroSkills: HeroSkillSelection
) {
  const errors: string[] = [];
  let totalLevel = 0;
  
  // 配列形式の処理
  for (const skill of heroSkills) {
    const skillName = skill.name;
    const level = skill.level || 0;
    const maxLevel = skill.maxLevel;
    
    if (!skillName || level <= 0) {
      continue; // 空のスキルはスキップ（寛容な処理）
    }
    
    // レベル制約チェック（maxLevelが設定されている場合のみ）
    if (maxLevel && level > maxLevel) {
      errors.push(`${skillName}: 最大レベル${maxLevel}を超えています（指定レベル: ${level}）`);
    }
    
    totalLevel += level;
  }
  
  // 合計レベル制約チェック
  const totalLevelValid = totalLevel <= 7;
  
  return {
    isValid: totalLevelValid && errors.length === 0,
    totalLevel,
    errors,
  };
}