import React from 'react';
import {
  GiCrystalBall,
  GiMagicSwirl,
  GiSpellBook,
  GiMagicPalm,
  GiBiceps,
  GiAlliedStar,
  GiBookshelf,
} from 'react-icons/gi';
import { MdOutlineBolt } from 'react-icons/md';
import { ClassPageLayout, ClassPageData } from '../components/ClassPageLayout';

export const MagicalClassPage: React.FC = () => {
  const classData: ClassPageData = {
    className: 'マジカル',
    description:
      '魔術や魔法と呼ばれる不可思議な力を用いるヒーローたち。別の姿に変身する、空を飛ぶ、結界をはる、炎を操るなど、幅広い能力を持つ。',
    classIcon: '🔮',
    abilityStats: [
      { name: '肉体', value: 1, icon: GiBiceps, color: 'bg-red-100' },
      { name: '反射', value: 1, icon: MdOutlineBolt, color: 'bg-yellow-100' },
      { name: '感覚', value: 1, icon: GiAlliedStar, color: 'bg-blue-100' },
      { name: '知力', value: 2, icon: GiBookshelf, color: 'bg-purple-100' },
      { name: '超常', value: 3, icon: GiMagicSwirl, color: 'bg-gray-100' },
    ],
    hpSp: [
      { name: 'ＨＰ', value: 23, color: 'bg-red-100' },
      { name: 'ＳＰ', value: 32, color: 'bg-blue-100' },
    ],
    classSkills: [
      {
        name: '《マジカルアタック》',
        icon: GiCrystalBall,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈魔術〉',
          target: '単体',
          range: '中距離',
          cost: 5,
          effect:
            '対象に特殊攻撃を行う。コンボ2。このヒーロースキルを組み合わせた攻撃のダメージに[ＬＶ×２]する。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《ウィッチブルーム》',
        icon: GiCrystalBall,
        details: {
          maxLv: 5,
          timing: 'スタートプロセス',
          skill: 'なし',
          target: '単体',
          range: '至近',
          cost: 5,
          effect:
            '対象はそのラウンド中、ドッジの判定に[Ｌｖ×１０]％し、移動を妨害されずエンゲージの封鎖の影響を受けない。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《スマイルマジック》',
        icon: GiCrystalBall,
        details: {
          maxLv: 5,
          timing: 'マイナー',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 3,
          effect:
            'あなたはこのメインプロセスで行う〈交渉〉か〈コネ〉の判定に＋[（Ｌｖ×10）＋10]％する。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《ハピネス》',
        icon: GiCrystalBall,
        details: {
          maxLv: 3,
          timing: 'オート',
          skill: 'なし',
          target: '単体',
          range: '中距離',
          cost: 4,
          effect:
            '対象が何らかの判定を行う直前に使用する。対象が行う判定の判定値に＋[Ｌｖ×２０]％する。１ラウンドに１回使用可能。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《支援魔術》',
        icon: GiCrystalBall,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈魔術〉',
          target: '単体',
          range: '中距離',
          cost: 5,
          effect:
            '対象が次に行う攻撃の判定値に＋２０％、ダメージに＋[Ｌｖ×４]＋１Ｄする。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《ヒーリングライト》',
        icon: GiCrystalBall,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈魔術〉',
          target: '単体',
          range: '中距離',
          cost: 4,
          effect: '対象のＨＰを[Ｌｖ×５]＋３Ｄ回復する。コンボ２。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《マルチスペル》',
        icon: GiCrystalBall,
        details: {
          maxLv: 3,
          timing: 'メジャー',
          skill: '〈魔術〉',
          target: '効果参照',
          range: 'なし',
          cost: 10,
          effect:
            'このヒーロースキルを組み合わせた行動の対象を[１＋Ｌｖ÷２(切り上げ)]体に変更する。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《マジカルチェンジ》',
        icon: GiCrystalBall,
        details: {
          maxLv: 3,
          timing: 'スタートプロセス',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 12,
          effect:
            'あなたの能力値をふたつ選択する。そのラウンド中、選択した能力値の一方を＋１し、もう一方を－１する。シーンにＬｖ回使用可能。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《封印結界術式》',
        icon: GiCrystalBall,
        details: {
          maxLv: 1,
          timing: 'オート',
          skill: 'なし',
          target: '単体',
          range: '中距離',
          cost: 12,
          effect:
            '対象が何らかのスキルを使用した際に使用する。対象が使用したスキルひとつを選択し、その効果を無効化する。シナリオに１回使用可能。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
      {
        name: '《奇跡の魔法》',
        icon: GiCrystalBall,
        details: {
          maxLv: 1,
          timing: 'オート',
          skill: 'なし',
          target: '単体',
          range: '中距離',
          cost: 'ＦＣ',
          effect:
            '対象が何らかの判定を行った直後に使用する。ファンチットを任意の枚数消費する。その判定の出目を＋[消費したＦＣ×１０]か－[消費ＦＣ×１０]する。シナリオに１回使用可能。',
        },
        color: 'bg-purple-50 border-purple-200',
      },
    ],
    characteristics: [
      {
        title: '不可思議な力の使い手',
        icon: GiCrystalBall,
        description:
          '変身、飛行、結界、炎の操作など、幅広い魔術的能力を持つ多彩なヒーロー',
        color: 'bg-purple-50 border-purple-200',
      },
      {
        title: '未解明の力',
        icon: GiSpellBook,
        description:
          '魔術は解明されていない力の分野であり、多くの人々がその存在を信じていない神秘的な力',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: '超能力とは異なる原理',
        icon: GiMagicPalm,
        description:
          '科学で解析できる超能力とは根本的に異なり、その原理も力の源も不明な部分が多い',
        color: 'bg-green-50 border-green-200',
      },
    ],
    characteristicsDescription: [
      '魔術や魔法と呼ばれる不可思議な力を用いるヒーローたちだ。別の姿に変身する、空を飛ぶ、結界をはる、炎を操るなど、幅広い能力を持つ。未だに魔術は解明されていない力の分野であり、多くの人々がその存在を信じていない力でもある。',
      '超能力と同一にみられることが多いが、それとは根本的に力のあり方が異なる。科学で解析できる範囲に収まっている超能力とことなり、魔術はその原理も力の源も不明な部分が多い。魔術を使うヒーローは師匠から学んだり、異世界の存在から力を与えられたりしているとか。',
    ],
    origins: [
      {
        title: '師匠からの伝承',
        description: '古の魔術師から秘術を受け継いだ正統な魔術師',
      },
      {
        title: '異世界の契約',
        description: '異世界の存在から力を与えられた契約者',
      },
      {
        title: '魔導書の発見',
        description: '偶然発見した古の魔導書から力を得た独学者',
      },
    ],
    originsDescription:
      'マジカルヒーローの力がどのようにして得られたかは様々である。キャラクター作成時に、自分のマジカルヒーローがどのような経緯で魔術を習得したのかを考えてみよう。',
    originsNote:
      'いずれの起源であっても、その力は神秘的で不可思議なものであり、使い手のみが理解できる特別な存在なのだ。',
    abilityNote:
      'マジカルは超常能力（3）に特化し、知力も平均以上を持つ魔術特化型クラス。物理能力は低いが、多彩な魔術で様々な状況に対応できる。',
    playStyles: [
      {
        title: '戦闘での役割',
        color: 'bg-green-50',
        items: [
          '《マジカルアタック》による魔術攻撃',
          '《支援魔術》で味方の攻撃を強化',
          '《ヒーリングライト》による回復支援',
          '《マルチスペル》で複数の対象を同時処理',
        ],
      },
      {
        title: '魔術による多彩な支援',
        color: 'bg-orange-50',
        items: [
          '《ウィッチブルーム》による移動支援',
          '《ハピネス》で味方の判定を強化',
          '《スマイルマジック》による交渉力向上',
          '《封印結界術式》で敵スキルを無効化',
        ],
      },
    ],
  };

  return <ClassPageLayout data={classData} />;
};
