import { HERO_SKILLS } from '../game-data/heroSkills';

type ClassName = keyof typeof HERO_SKILLS;
type HeroSkillSelection = Record<string, number>;

export function validateHeroSkills(
  selectedClasses: readonly [ClassName, ClassName],
  heroSkills: HeroSkillSelection
) {
  // 最小実装: 合計レベルを計算
  const totalLevel = Object.values(heroSkills).reduce((sum, level) => sum + level, 0);
  
  return {
    isValid: totalLevel <= 7,
    totalLevel,
  };
}