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
  テクノロジー: {
    スペシャルツール: {
      maxLevel: 5,
      classes: ['テクノロジー'],
      timing: '常時',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 'なし',
      effect: 'テクノロジー専用アイテムを１つ取得する。このヒーロースキルのＬｖが３以上になったならば追加で１つ、Ｌｖが５以上になったならば更に追加で１つ取得する',
    },
    アイテムボックス: {
      maxLevel: 5,
      classes: ['テクノロジー'],
      timing: 'メジャーアクション',
      skill: '〈製作〉',
      target: '装備ひとつ',
      range: '至近',
      cost: 6,
      effect: '装備ひとつを対象に〈製作〉技能での判定を行う。判定に成功したならば、対象の「攻撃力」「防護点」「ガード値」「修正」の内のひとつを＋[Ｌｖ＋１]する。同じ装備品の同じデータに対しては効果は重複しない。',
    },
    ツールファイト: {
      maxLevel: 5,
      classes: ['テクノロジー'],
      timing: 'メジャーアクション',
      skill: '〈操縦〉〈射撃〉',
      target: '単体',
      range: '武器',
      cost: 4,
      effect: 'このヒーロースキルを組み合わせた〈操縦〉〈射撃〉技能の判定値を＋[（Ｌｖ×１０）＋１０]％する。攻撃に組み合わせて使用した場合、コンボ２として扱う。',
    },
    バリア発生装置: {
      maxLevel: 5,
      classes: ['テクノロジー'],
      timing: 'オート',
      skill: 'なし',
      target: '単体',
      range: '近距離',
      cost: 4,
      effect: 'ダメージロールの直後に使用する。対象が受けるダメージを[Ｌｖ×２]＋２Ｄ軽減する。ラウンドに１回使用可能。',
    },
    研究費用: {
      maxLevel: 10,
      classes: ['テクノロジー'],
      timing: '常時',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 'なし',
      effect: 'あなたは常備化点をＬｖ×５点追加で取得する。',
    },
    デポジッション: {
      maxLevel: 1,
      classes: ['テクノロジー'],
      timing: '行動値チェック',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 3,
      effect: 'あなたの装備しているアイテムひとつを装備から外し、あなたの所持していることなるアイテムひとつを即座に装備する。',
    },
    リアクターパルス: {
      maxLevel: 3,
      classes: ['テクノロジー'],
      timing: 'オート',
      skill: 'なし',
      target: '単体',
      range: '中',
      cost: 4,
      effect: '対象が何らかの判定を行う直前に使用する。対象の判定値を－[Ｌｖ×１０]％する。ラウンドに１回使用可能。',
    },
    エネルギーレイ: {
      maxLevel: 3,
      classes: ['テクノロジー'],
      timing: 'マイナー',
      skill: 'なし',
      target: '自身',
      range: 'なし',
      cost: 6,
      effect: 'あなたがそのメインプロセス中に行う攻撃ではダメージを＋[Ｌｖ×３]し、防護点を無視してダメージを算出する。シーンにＬｖ回使用可能。',
    },
    バラージショット: {
      maxLevel: 5,
      classes: ['テクノロジー'],
      timing: 'メジャーアクション',
      skill: '〈射撃〉',
      target: '範囲（選択）',
      range: '武器',
      cost: 7,
      effect: 'このヒーロースキルを組み合わせた攻撃の対象を範囲（選択）に変更する。また、この攻撃のダメージに[Ｌｖ＋５]する。シーンに１回使用可能。このヒーロースキルのＬｖが３以上になったならばシーンに２回、Ｌｖが５以上になったならばシーンに３回使用可能。',
    },
    リミッター解除: {
      maxLevel: 3,
      classes: ['テクノロジー'],
      timing: 'セットアップ',
      skill: 'なし',
      target: '効果参照',
      range: '至近',
      cost: 'ＦＣ',
      effect: 'あなたが装備しているアイテムひとつを対象とする。ファンチットを任意の枚数消費し、対象の「攻撃力」「防護点」「ガード値」「行動値」「修正」のうち[消費したＦＣ]個に＋[（Ｌｖ×３）＋２]する。判定値への修正については＋[Ｌｖ×５]％する。シナリオに１回使用可能。',
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
