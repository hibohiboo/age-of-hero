import { HERO_SKILLS } from '../game-data/heroSkills';

type ClassName = keyof typeof HERO_SKILLS;
type HeroSkillSelection = Record<string, number>;

export function validateHeroSkills(
  selectedClasses: readonly [ClassName, ClassName],
  heroSkills: HeroSkillSelection
) {
  const errors: string[] = [];
  
  // 個別スキルレベル制約チェック
  for (const [skillName, level] of Object.entries(heroSkills)) {
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
  }
  
  // 合計レベル制約チェック
  const totalLevel = Object.values(heroSkills).reduce((sum, level) => sum + level, 0);
  const totalLevelValid = totalLevel <= 7;
  
  return {
    isValid: totalLevelValid && errors.length === 0,
    totalLevel,
    errors,
  };
}