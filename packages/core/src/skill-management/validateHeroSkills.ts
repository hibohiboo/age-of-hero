import { HERO_SKILLS } from '../game-data/heroSkills';

type ClassName = keyof typeof HERO_SKILLS;

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
    
    if (!skillName || level <= 0) {
      continue; // 空のスキルはスキップ（寛容な処理）
    }
    
    let skillFound = false;
    
    // 全クラスからスキルを検索
    for (const [className, classSkills] of Object.entries(HERO_SKILLS)) {
      const skillData = classSkills[skillName as keyof typeof classSkills];
      if (skillData) {
        skillFound = true;
        if (level > skillData.maxLevel) {
          errors.push(`${skillName}: 最大レベル${skillData.maxLevel}を超えています（指定レベル: ${level}）`);
        }
        break;
      }
    }
    
    if (!skillFound) {
      errors.push(`${skillName}: 存在しないヒーロースキルです`);
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