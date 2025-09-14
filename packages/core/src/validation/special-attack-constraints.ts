export interface SpecialAttack {
  name: string;
  level: number;
  maxLevel: number;
  timing: string;
  skill: string;
  target: string;
  range: string;
  cost: number;
  effect: string;
}

export interface CharacterData {
  specialAttacks: SpecialAttack[];
}

export interface ValidationError {
  type: string;
  message: string;
  skillName?: string;
  level?: number;
  maxLevel?: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export const validateSpecialAttackConstraints = (
  characterData: CharacterData,
): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!characterData.specialAttacks || characterData.specialAttacks.length === 0) {
    return { isValid: true, errors: [] };
  }

  for (const attack of characterData.specialAttacks) {
    // レベルが1以上かチェック
    if (attack.level <= 0) {
      errors.push({
        type: 'INVALID_LEVEL',
        message: `必殺技「${attack.name}」のレベルは1以上である必要があります`,
        skillName: attack.name,
        level: attack.level,
      });
    }

    // レベルがmaxLevelを超えていないかチェック
    if (attack.level > attack.maxLevel) {
      errors.push({
        type: 'LEVEL_EXCEEDS_MAX',
        message: `必殺技「${attack.name}」のレベル${attack.level}が最大レベル${attack.maxLevel}を超えています`,
        skillName: attack.name,
        level: attack.level,
        maxLevel: attack.maxLevel,
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};