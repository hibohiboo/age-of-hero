import React from 'react';
import {
  GiBrain,
  GiThirdEye,
  GiMindControl,
  GiBiceps,
  GiAlliedStar,
  GiBookshelf,
  GiMagicSwirl,
  GiLightningBolt,
  GiTeleport,
  GiShieldReflect,
} from 'react-icons/gi';
import { MdOutlineBolt } from 'react-icons/md';
import { ClassPageLayout, ClassPageData } from '../components/ClassPageLayout';

export const PsychicClassPage: React.FC = () => {
  const classData: ClassPageData = {
    className: 'サイキック',
    description: '超能力という特殊な能力を使うヒーローたち。個人ごとにテレパスや治癒能力の強化、気象や磁力の操作など能力の規模や方向性が異なる様々な能力を用いて戦闘や救助を行う。',
    classIcon: '🧠',
    abilityStats: [
      { name: '肉体', value: 1, icon: GiBiceps, color: 'bg-red-100' },
      { name: '反射', value: 1, icon: MdOutlineBolt, color: 'bg-yellow-100' },
      { name: '感覚', value: 2, icon: GiAlliedStar, color: 'bg-blue-100' },
      { name: '知力', value: 2, icon: GiBookshelf, color: 'bg-purple-100' },
      { name: '超常', value: 2, icon: GiMagicSwirl, color: 'bg-gray-100' },
    ],
    hpSp: [
      { name: 'ＨＰ', value: 25, color: 'bg-red-100' },
      { name: 'ＳＰ', value: 30, color: 'bg-blue-100' },
    ],
    classSkills: [
      {
        name: '《パワーオリジン》',
        icon: GiBrain,
        details: {
          maxLv: 1,
          timing: '常時',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 'なし',
          effect:
            'あなたは、《オリジン：○○》という名前のヒーロースキルを一種類選択し、取得することが可能になる。このヒーロースキルの効果で選択しなかった《オリジン：○○》は取得することができない。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《オリジン：エレメント》',
        icon: GiBrain,
        details: {
          maxLv: 3,
          timing: 'メジャーアクション',
          skill: '〈超能力〉',
          target: '単体',
          range: '中距離',
          cost: 4,
          effect:
            '対象に特殊攻撃を行う。コンボ２。このヒーロースキルを組み合わせた攻撃のダメージに＋[（Ｌｖ×２）＋３]',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《オリジン：精神感応能力》',
        icon: GiBrain,
        details: {
          maxLv: 3,
          timing: 'オートアクション',
          skill: 'なし',
          target: '単体',
          range: '中距離',
          cost: 4,
          effect:
            '対象が何らかの判定を行う直前に使用する。対象が行う判定の判定値に＋[Ｌｖ×１0]％か－[Ｌｖ×１０]％する。１ラウンドに１回使用可能。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《オリジン：身体機能強化》',
        icon: GiBrain,
        details: {
          maxLv: 1,
          timing: '常時',
          skill: 'なし',
          target: '自身',
          range: '単体',
          cost: 'なし',
          effect:
            '能力値をひとつ選択する。あなたの【超常】能力値を－１し、選択した能力値を＋１する。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《オリジン：空間転移》',
        icon: GiBrain,
        details: {
          maxLv: 1,
          timing: 'ムーブアクション',
          skill: 'なし',
          target: '単体',
          range: '至近',
          cost: 4,
          effect:
            '対象をシーンの任意の距離に移動させる。この移動の際、対象は移動を妨害されない。同意を得た対象にのみ使用できる。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《オリジン：プレコグニション》',
        icon: GiBrain,
        details: {
          maxLv: 3,
          timing: 'スタートプロセス',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 6,
          effect:
            'あなたはそのラウンド中、メジャーアクションとリアクションの判定の判定値に＋[Ｌｖ×１０]する。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《オリジン：物体動作支配》',
        icon: GiBrain,
        details: {
          maxLv: 1,
          timing: 'スタートプロセス',
          skill: 'なし',
          target: '効果参照',
          range: '中距離',
          cost: 8,
          effect:
            '射程内のエンゲージをひとつ対象とする。対象のエンゲージを封鎖する。あなたは行動終了となる。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《サイコインパクト》',
        icon: GiBrain,
        details: {
          maxLv: 5,
          timing: 'マイナーアクション',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 5,
          effect:
            '《オリジン：エレメント》《オリジン：空間転移》《オリジン：物体動作支配》のみ取得可能。あなたがこのメインプロセス中に行う攻撃のダメージに＋[Ｌｖ×２]する。また、その攻撃でダメージを与えた場合、ダメージを受けたキャラクターを１段階移動させてもよい。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《多重能力者》',
        icon: GiBrain,
        details: {
          maxLv: 1,
          timing: '常時',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 'なし',
          effect:
            'あなたは、取得していない《オリジン：○○》という名前のヒーロースキルを一種類選択し、取得することが可能になる。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
      {
        name: '《能力暴走》',
        icon: GiBrain,
        details: {
          maxLv: 3,
          timing: 'スタートプロセス',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 8,
          effect:
            '《オリジン：エレメント》《オリジン：精神感応能力》《オリジン：物体動作支配》のみ取得可能。そのラウンド中、あなたが行う〈超能力〉判定の判定値に＋５０％し、メジャーアクションのコンボ数に＋１する。あなたはそのラウンド中、メインプロセスの終了時にＨＰが０になる。シーンにＬｖ回まで使用可能。',
        },
        color: 'bg-pink-50 border-pink-200',
      },
    ],
    characteristics: [
      {
        title: '特殊な超能力の使い手',
        icon: GiBrain,
        description:
          'テレパス、治癒能力、気象や磁力操作など、個人ごとに異なる様々な超能力を駆使する',
        color: 'bg-pink-50 border-pink-200',
      },
      {
        title: '一つの能力への特化',
        icon: GiBrain,
        description:
          '魔術とは異なり、個人が持てる能力はほぼひとつのみだが、その能力の使い方を究めている',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: '科学的に解明された力',
        icon: GiBrain,
        description:
          '「使われていなかった脳機能」の発現であると解明され、人間の進化の一形態とされる',
        color: 'bg-green-50 border-green-200',
      },
    ],
    characteristicsDescription: [
      '超能力という特殊な能力を使うヒーローたちだ。個人ごとにテレパスや治癒能力の強化、気象や磁力の操作など能力の規模や方向性が異なる様々な能力を用いて戦闘や救助を行う。',
      '魔術とは異なり、個人が持てる能力はほとんどの場合ひとつのみだ。しかし、それ故に自分の能力の使い方を究めたヒーローが多く、彼らは自分の長所短所を十分に理解し戦術を構築している。',
      '現在では超能力は「それまで使われていなかった人間の脳機能」が突然変異的に発現したものであると解明され、人間の進化のひとつの形なのではと囁かれている。',
    ],
    origins: [
      {
        title: '生来の能力者',
        description: '生まれつき超能力を持っていた天然の能力者',
      },
      {
        title: '突然の覚醒',
        description: '事故やショックをきっかけに能力が突然発現した',
      },
      {
        title: '後天的獲得',
        description: '実験や訓練によって後天的に超能力を身に着けた',
      },
    ],
    originsDescription: 'サイキックヒーローの超能力がどのようにして発現したかは様々である。キャラクター作成時に、自分のサイキックがどのような経緯で能力を得たのかを考えてみよう。',
    originsNote: 'いずれの起源であっても、その能力は脳機能の特殊な発現であり、使い手独自の特別な能力なのだ。',
    abilityNote: 'サイキックは感覚・知力・超常能力がバランス良く配分された精神系クラス。物理能力は低いが、多様な超能力で戦況をコントロールできる。クラス取得時に《パワーオリジン》を自動取得する。',
    playStyles: [
      {
        title: '戦闘での役割',
        color: 'bg-green-50',
        items: [
          '《オリジン：エレメント》による超能力攻撃',
          '《オリジン：精神感応能力》で敵の判定を妨害',
          '《サイコインパクト》による強化攻撃',
          '《能力暴走》でリスクを背負った強力な攻撃',
        ],
      },
      {
        title: '戦術的支援',
        color: 'bg-orange-50',
        items: [
          '《オリジン：空間転移》による位置制御',
          '《オリジン：プレコグニション》で先読み行動',
          '《オリジン：物体動作支配》による場の制圧',
          '《多重能力者》で複数の超能力を習得',
        ],
      },
    ],
  };

  return <ClassPageLayout data={classData} />;
};