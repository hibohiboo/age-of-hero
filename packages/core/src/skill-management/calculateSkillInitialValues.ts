import { SKILLS, type SkillName } from '../game-data/skills';

type Abilities = {
  physical: number;
  reflex: number;
  sensory: number;
  intellectual: number;
  supernatural: number;
};

export function calculateSkillInitialValues(abilities: Abilities) {
  const result: Record<string, number> = {};
  
  for (const [skillName, skillData] of Object.entries(SKILLS)) {
    const baseAbility = skillData.baseAbility;
    result[skillName] = abilities[baseAbility] * 10;
  }
  
  return result;
}