import React from 'react';
import {
  GiMuscleUp,
  GiRunningShoe,
  GiShield,
  GiFist,
  GiBiceps,
  GiAlliedStar,
  GiBookshelf,
  GiMagicSwirl,
} from 'react-icons/gi';
import { MdOutlineBolt } from 'react-icons/md';
import { ClassPageLayout, ClassPageData } from '../components/ClassPageLayout';

export const MuscleClassPage: React.FC = () => {
  const classData: ClassPageData = {
    className: 'マッスル',
    description:
      '強靭な肉体を駆使して戦うヒーローたち。単純なパワーに限らず、脚力の強化によるスピードアップや身体機能の上昇による防御なども行える。',
    classIcon: '💪',
    abilityStats: [
      { name: '肉体', value: 3, icon: GiBiceps, color: 'bg-red-100' },
      { name: '反射', value: 2, icon: MdOutlineBolt, color: 'bg-yellow-100' },
      { name: '感覚', value: 2, icon: GiAlliedStar, color: 'bg-blue-100' },
      { name: '知力', value: 1, icon: GiBookshelf, color: 'bg-purple-100' },
      { name: '超常', value: 0, icon: GiMagicSwirl, color: 'bg-gray-100' },
    ],
    hpSp: [
      { name: 'ＨＰ', value: 38, color: 'bg-red-100' },
      { name: 'ＳＰ', value: 17, color: 'bg-blue-100' },
    ],
    characteristics: [
      {
        title: '近接戦闘の専門家',
        icon: GiFist,
        description:
          '腕力とスピードを生かした近接戦闘では他を圧倒する力を見せる',
        color: 'bg-red-50 border-red-200',
      },
      {
        title: '救助活動の最前線',
        icon: GiRunningShoe,
        description:
          '事件や救助の場面では最前線に立ち、その身を使って困難に立ち向かう',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: '等身大のヒーロー',
        icon: GiShield,
        description:
          '一般市民からは最も近く感じる等身大のヒーローとして受け止められる',
        color: 'bg-green-50 border-green-200',
      },
    ],
    characteristicsDescription: [
      '強靭な肉体を駆使して戦うヒーローたちだ。単純なパワーに限らず、脚力の強化によるスピードアップや身体機能の上昇による防御なども行える。腕力とスピードを生かした近接戦闘では他を圧倒する力を見せるだろう。',
      'また、事件や救助の場面などでは最前線に立ち、その身を使って困難に立ち向かう姿は、一般市民からは最も近く感じる等身大のヒーローとして受け止められることが多い。',
      'その身体は生まれ持っての恵まれた体かもしれないし、後天的に改造を受けたのかもしれない。あるいは、ひたすらに積んだ鍛錬による可能性もある。いずれにせよ、その肉体はもはや超常の域にあるのだ。',
    ],
    classSkills: [
      {
        name: '《パワードライブ》',
        icon: GiMuscleUp,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '白兵攻撃',
          target: '単体',
          range: '武器',
          cost: 4,
          effect:
            '対象に白兵攻撃を行う。コンボ２。このヒーロースキルを組み合わせた攻撃のダメージに＋[Ｌｖ×４]する。このヒーロースキルのＬｖが４以上になったならばコンボ数を＋１してもよい。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《マッスルチャージ》',
        icon: GiMuscleUp,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈パワー〉',
          target: '単体',
          range: '至近',
          cost: 3,
          effect:
            'このヒーロースキルを組み合わせた〈パワー〉技能の判定値を＋[Ｌｖ×２０]％する。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《バイタルアップ》',
        icon: GiMuscleUp,
        details: {
          maxLv: 10,
          timing: '常時',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 'なし',
          effect: 'あなたの最大ＨＰを＋[Ｌｖ×５]する。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《即席巨大武器》',
        icon: GiMuscleUp,
        details: {
          maxLv: 5,
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
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《ボディウォール》',
        icon: GiMuscleUp,
        details: {
          maxLv: 1,
          timing: 'オートアクション',
          skill: 'なし',
          target: '単体',
          range: '至近',
          cost: 2,
          effect:
            '対象がリアクションを行った直前に使用する。対象への攻撃に対しカバーリングを行う。あなたはこのヒーロースキルによるカバーリングで行動終了にならず、行動終了していても使用できる。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《アダプテーション》',
        icon: GiMuscleUp,
        details: {
          maxLv: 3,
          timing: 'スタートプロセス',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 6,
          effect:
            '「白兵攻撃の判定」「ドッジの判定」の内からひとつを選択する。そのラウンド中、選択した判定値を＋[Ｌｖ×２０％]する。またそのラウンド中、「攻撃力」「防護点」「行動値」のいずれかに＋３する。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《肉体硬化》',
        icon: GiMuscleUp,
        details: {
          maxLv: 5,
          timing: 'リアクション',
          skill: '技能',
          target: '自身',
          range: 'なし',
          cost: 4,
          effect:
            'ガード判定を行う。そのメインプロセス中、あなたのガード値を＋[Ｌｖ×４]＋１Ｄする。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《フルパワーアタック》',
        icon: GiMuscleUp,
        details: {
          maxLv: 3,
          timing: 'ムーブアクション',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 6,
          effect:
            'あなたがそのメインプロセス中に行う白兵攻撃ではダメージを＋[Ｌｖ×５]する。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《スピードフォース》',
        icon: GiMuscleUp,
        details: {
          maxLv: 3,
          timing: 'メジャーアクション',
          skill: '〈パワー〉',
          target: '単体',
          range: '至近',
          cost: 8,
          effect:
            '対象に白兵攻撃を行う。コンボ２。その攻撃のダメージに＋[行動値]する。シーンにＬｖ回使用可能。',
        },
        color: 'bg-red-50 border-red-200',
      },
      {
        name: '《ビルドアップストライク》',
        icon: GiMuscleUp,
        details: {
          maxLv: 5,
          timing: 'オート',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 'ＦＣ',
          effect:
            'ファンチットを５枚消費する。ダメージロールの直前に使用する。そのダメージロールに＋３Ｄする。シーンに１回使用可能。このヒーロースキルのＬｖが３以上になったならばシナリオに２回、Ｌｖが５以上になったならばシナリオに３回使用可能。',
        },
        color: 'bg-red-50 border-red-200',
      },
    ],
    origins: [
      {
        title: '生まれ持った才能',
        description: 'その身体は生まれ持っての恵まれた体かもしれない',
      },
      {
        title: '後天的な改造',
        description: '後天的に改造を受けたのかもしれない',
      },
      {
        title: '鍛錬の賜物',
        description: 'ひたすらに積んだ鍛錬による可能性もある',
      },
    ],
    originsDescription:
      'マッスルの超常的な肉体がどのようにして得られたかは様々である。キャラクター作成時に、自分のマッスルがどのような経緯で力を得たのかを考えてみよう。',
    originsNote:
      'いずれの起源であっても、その肉体はもはや超常の域にある。普通の人間では到底不可能な身体能力を発揮することができる存在なのだ。',
    abilityNote:
      'マッスルは肉体能力に特化したクラス。最高の肉体能力値（3）を持ち、反射と感覚も平均的な値を保つ。知力は低めで、超常能力は持たない物理特化型のヒーローである。',
    playStyles: [
      {
        title: '戦闘での役割',
        color: 'bg-green-50',
        items: [
          '前衛アタッカーとして敵に接近し、高い攻撃力で敵を撃破',
          '《パワードライブ》による強力なコンボ攻撃',
          '《マッスルチャージ》で各種判定を強化',
          '《バイタルアップ》による高いHP量で壁役も可能',
        ],
      },
      {
        title: '救助・探索での活躍',
        color: 'bg-orange-50',
        items: [
          'がれきの除去や重量物の運搬',
          '危険な場所への突入と人命救助',
          '物理的な障害の突破',
          '一般市民に安心感を与える存在',
        ],
      },
    ],
  };

  return <ClassPageLayout data={classData} />;
};
