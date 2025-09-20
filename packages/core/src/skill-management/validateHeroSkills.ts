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
  heroSkills: HeroSkillSelection,
) {
  // 有効なスキルのみ抽出
  const validSkills = heroSkills.filter(
    (skill) => skill.name && (skill.level || 0) > 0,
  );

  // レベル制約エラーを収集
  const errors = validSkills.reduce<string[]>((acc, skill) => {
    const level = skill.level || 0;
    const { maxLevel, name } = skill;
    if (maxLevel && level > maxLevel) {
      acc.push(
        `${name}: 最大レベル${maxLevel}を超えています（指定レベル: ${level}）`,
      );
    }
    return acc;
  }, []);

  // 合計レベル計算
  const totalLevel = validSkills.reduce(
    (sum, skill) => sum + (skill.level || 0),
    0,
  );

  // 合計レベル制約チェック
  const totalLevelValid = totalLevel <= 7;

  return {
    isValid: totalLevelValid && errors.length === 0,
    totalLevel,
    errors,
  };
}
