/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CharacterFormData } from '@age-of-hero/ui';

interface CharacterDetail {
  id: string;
  name: string;
  selectedClasses?: [string, string];
  abilityBonus?: string;
  skillAllocations?: Record<string, number>;
  heroSkills?: any[];
  specialAttacks?: any[];
  items?: any[];
}

export const transformCharacterToFormData = (
  character: CharacterDetail,
): CharacterFormData => ({
  name: character.name,
  selectedClasses: character.selectedClasses || ['', ''],
  abilityBonus: (character.abilityBonus as any) || 'physical',
  skillAllocations: character.skillAllocations || {},
  heroSkills: character.heroSkills || [],
  specialAttacks: character.specialAttacks || [],
  items: character.items || [],
  skillPointsLimit: 200,
  heroSkillLevelLimit: 15,
  itemPriceLimit: 500,
});
