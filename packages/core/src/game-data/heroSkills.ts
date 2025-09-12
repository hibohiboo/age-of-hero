export const HERO_SKILLS = {
  マッスル: {
    パワードライブ: {
      maxLevel: 5,
      classes: ['マッスル'],
      timing: 'メジャーアクション',
      skill: '白兵攻撃',
      target: '単体',
      range: '武器',
      cost: 4,
      effect:
        '対象に白兵攻撃を行う。コンボ２。このヒーロースキルを組み合わせた攻撃のダメージに＋[Ｌｖ×４]する。このヒーロースキルのＬｖが４以上になったならばコンボ数を＋１してもよい。',
    },
    マッスルチャージ: {
      maxLevel: 5,
      classes: ['マッスル'],
      timing: 'メジャーアクション',
      skill: '〈パワー〉',
      target: '単体',
      range: '至近',
      cost: 3,
      effect:
        'このヒーロースキルを組み合わせた〈パワー〉技能の判定値を＋[Ｌｖ×２０]％する。',
    },
    バイタルアップ: {
      maxLevel: 10,
      classes: ['マッスル'],
      timing: '常時',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 'なし',
      effect: 'あなたの最大ＨＰを＋[Ｌｖ×５]する。',
    },
    即席巨大武器: {
      maxLevel: 5,
      classes: ['マッスル'],
      timing: 'マイナーアクション',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 4,
      effect: `そのシーンの間、以下のデータの武器を作成し装備する。このヒーロースキルのＬｖが３以上になったならば、この武器を用いて「対象：範囲」に攻撃を行ってもよい。
種別：白兵
技能：〈パワー〉
修正：－２０％
攻撃力：＋[Ｌｖ＋９]
ガード値：６
射程：至近`,
    },
    ボディウォール: {
      maxLevel: 1,
      classes: ['マッスル'],
      timing: 'オートアクション',
      skill: 'なし',
      target: '単体',
      range: '至近',
      cost: 2,
      effect:
        '対象がリアクションを行った直前に使用する。対象への攻撃に対しカバーリングを行う。あなたはこのヒーロースキルによるカバーリングで行動終了にならず、行動終了していても使用できる。',
    },
    アダプテーション: {
      maxLevel: 3,
      classes: ['マッスル'],
      timing: 'スタートプロセス',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 6,
      effect:
        '「白兵攻撃の判定」「ドッジの判定」の内からひとつを選択する。そのラウンド中、選択した判定値を＋[Ｌｖ×２０％]する。またそのラウンド中、「攻撃力」「防護点」「行動値」のいずれかに＋３する。',
    },
    肉体硬化: {
      maxLevel: 5,
      classes: ['マッスル'],
      timing: 'リアクション',
      skill: '技能',
      target: '自身',
      range: 'なし',
      cost: 4,
      effect:
        'ガード判定を行う。そのメインプロセス中、あなたのガード値を＋[Ｌｖ×４]＋１Ｄする。',
    },
    フルパワーアタック: {
      maxLevel: 3,
      classes: ['マッスル'],
      timing: 'ムーブアクション',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 6,
      effect:
        'あなたがそのメインプロセス中に行う白兵攻撃ではダメージを＋[Ｌｖ×５]する。',
    },
    スピードフォース: {
      maxLevel: 3,
      classes: ['マッスル'],
      timing: 'メジャーアクション',
      skill: '〈パワー〉',
      target: '単体',
      range: '至近',
      cost: 8,
      effect:
        '対象に白兵攻撃を行う。コンボ２。その攻撃のダメージに＋[行動値]する。シーンにＬｖ回使用可能。',
    },
    ビルドアップストライク: {
      maxLevel: 5,
      classes: ['マッスル'],
      timing: 'オート',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 'ＦＣ',
      effect:
        'ファンチットを５枚消費する。ダメージロールの直前に使用する。そのダメージロールに＋３Ｄする。シーンに１回使用可能。このヒーロースキルのＬｖが３以上になったならばシナリオに２回、Ｌｖが５以上になったならばシナリオに３回使用可能。',
    },
  },
} as const;

export type HeroSkillCategory = keyof typeof HERO_SKILLS;
export type HeroSkillName = {
  [K in HeroSkillCategory]: keyof (typeof HERO_SKILLS)[K];
}[HeroSkillCategory];

export type HeroSkillSelection = Record<string, number>;

export function getClassHeroSkills(className: HeroSkillCategory) {
  return HERO_SKILLS[className];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatHeroSkillForUI(skillName: string, skillData: any) {
  return {
    name: `《${skillName}》`,
    details: {
      maxLv: skillData.maxLevel,
      timing: skillData.timing,
      skill: skillData.skill,
      target: skillData.target,
      range: skillData.range,
      cost: skillData.cost,
      effect: skillData.effect,
    },
  };
}
