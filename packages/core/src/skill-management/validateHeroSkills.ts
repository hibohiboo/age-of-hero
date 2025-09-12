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
    // マッスルクラスのスキルから検索
    const muscleSkill = HERO_SKILLS.マッスル[skillName as keyof typeof HERO_SKILLS.マッスル];
    if (muscleSkill && level > muscleSkill.maxLevel) {
      errors.push(`${skillName}: 最大レベル${muscleSkill.maxLevel}を超えています（指定レベル: ${level}）`);
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