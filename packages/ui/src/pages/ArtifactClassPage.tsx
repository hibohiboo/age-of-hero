import React from 'react';
import {
  GiAncientSword,
  GiBiceps,
  GiAlliedStar,
  GiBookshelf,
  GiMagicSwirl,
} from 'react-icons/gi';
import { MdOutlineBolt } from 'react-icons/md';
import { ClassPageLayout, ClassPageData } from '../components/ClassPageLayout';

export const ArtifactClassPage: React.FC = () => {
  const classData: ClassPageData = {
    className: 'アーティファクト',
    description: '遠い過去や神話の時代の武具を用いたり、それらの世界から現代にやってきたりといったヒーローだ。神代・古代の神秘的な力を持つ道具を使い、神からの寵愛を受ける。',
    classIcon: '⚔️',
    abilityStats: [
      { name: '肉体', value: 2, icon: GiBiceps, color: 'bg-red-100' },
      { name: '反射', value: 1, icon: MdOutlineBolt, color: 'bg-yellow-100' },
      { name: '感覚', value: 2, icon: GiAlliedStar, color: 'bg-blue-100' },
      { name: '知力', value: 1, icon: GiBookshelf, color: 'bg-purple-100' },
      { name: '超常', value: 2, icon: GiMagicSwirl, color: 'bg-gray-100' },
    ],
    hpSp: [
      { name: 'ＨＰ', value: 34, color: 'bg-red-100' },
      { name: 'ＳＰ', value: 21, color: 'bg-blue-100' },
    ],
    classSkills: [
      {
        name: '《古代兵装》',
        icon: GiAncientSword,
        details: {
          maxLv: 5,
          timing: 'マイナーアクション',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 4,
          effect:
            'そのシーン中、以下のデータの武器を作成し、装備する。このヒーロースキルのレベルが３以上になったならば、この武器による攻撃によるダメージは防護点を－[Ｌｖ×２]して算出する。種別：白兵　技能：〈パワー〉〈技術〉　修正：０％　攻撃力：＋[Ｌｖ＋７]　ガード値：４　射程：至近',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《ミスティックアーマー》',
        icon: GiAncientSword,
        details: {
          maxLv: 5,
          timing: 'マイナー',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 4,
          effect:
            'あなたが装備している防具の防護点を[Ｌｖ×４]する。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《神聖なる献身》',
        icon: GiAncientSword,
        details: {
          maxLv: 1,
          timing: 'オート',
          skill: 'なし',
          target: '単体',
          range: '至近',
          cost: 4,
          effect:
            '対象がリアクションを行った直前に使用する。対象への攻撃に対しカバーリングを行い、このメインプロセス中に受けるダメージを５点軽減する。あなたはこのヒーロースキルによるカバーリングで行動終了にならず、行動終了していても使用できる。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《守護神の加護》',
        icon: GiAncientSword,
        details: {
          maxLv: 5,
          timing: 'リアクション',
          skill: '技能',
          target: '自身',
          range: 'なし',
          cost: 3,
          effect:
            'ガード時に使用する。そのメインプロセス中、あなたのガード値を＋[Ｌｖ×４]する。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《オーラバトラー》',
        icon: GiAncientSword,
        details: {
          maxLv: 5,
          timing: 'マイナーアクション',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 3,
          effect:
            'このメインプロセス中、あなたがアーティファクトのヒーロースキルを使用した判定を行う際、判定値に＋[Ｌｖ×２０]％する。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《エンシェントスペル》',
        icon: GiAncientSword,
        details: {
          maxLv: 1,
          timing: 'メジャーアクション',
          skill: '〈魔術〉',
          target: '単体',
          range: '中距離',
          cost: 5,
          effect:
            '対象に特殊攻撃を行う。コンボ2。このヒーロースキルを組み合わせた攻撃のダメージに＋[装備している武器の攻撃力]する。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《グラディエーター》',
        icon: GiAncientSword,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '白兵攻撃',
          target: '単体',
          range: '武器',
          cost: 3,
          effect:
            '対象に白兵攻撃を行う。コンボ２。このヒーロースキルを組み合わせた攻撃のダメージに＋[Ｌｖ×３]する。このヒーロースキルのＬｖが４以上になったならばコンボ数を＋１してもよい。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《黄金の果実》',
        icon: GiAncientSword,
        details: {
          maxLv: 3,
          timing: '行動値チェック',
          skill: 'なし',
          target: '単体',
          range: '至近',
          cost: 12,
          effect:
            '戦闘不能状態のキャラクターを対象とする。その戦闘不能状態を解除し、HPを[Ｌｖ×２０]点回復する。このヒーロースキルはあなたが戦闘不能状態でも使用できる。シナリオに１回使用可能。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《ランページオーラ》',
        icon: GiAncientSword,
        details: {
          maxLv: 3,
          timing: 'マイナーアクション',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 8,
          effect:
            'このメインプロセス中、あなたが行う攻撃に対してガードを行えない。１シナリオに１回。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
      {
        name: '《ジャッジメントボルト》',
        icon: GiAncientSword,
        details: {
          maxLv: 3,
          timing: '行動値チェック',
          skill: 'なし',
          target: '単体',
          range: '視界',
          cost: 'ＦＣ',
          effect:
            'ファンチットを５枚消費する。対象に５DのHPダメージを与える。ラウンドに１回、シナリオにレベル回使用可能。',
        },
        color: 'bg-orange-50 border-orange-200',
      },
    ],
    characteristics: [
      {
        title: '神話の武具を操る者',
        icon: GiAncientSword,
        description:
          '遠い過去や神話の時代の武具を用い、神代・古代の神秘的な力を持つ道具で戦う',
        color: 'bg-orange-50 border-orange-200',
      },
      {
        title: '神からの寵愛',
        icon: GiAncientSword,
        description:
          '神からの寵愛を受けた存在として、時に奇跡のような力を発揮する',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: '力を保つ遺物',
        icon: GiAncientSword,
        description:
          '遺跡出土品や古代武具を媒介とし、作られた時からの形を保つ物品が力を維持しやすい',
        color: 'bg-green-50 border-green-200',
      },
    ],
    characteristicsDescription: [
      'アーティファクトとは遠い過去や神話の時代の武具を用いたり、それらの世界から現代にやってきたりといったヒーローだ。神代・古代の神秘的な力を持つ道具を使い、神からの寵愛を受ける彼らは時に奇跡のような力を発揮する。',
      '彼らは遺跡から出土した品々や、神話の時代から自身とともに現代にやってきた武具を媒介として能力を使う場合が多い。これは現代世界においては変化していく生命よりも、作られた時からの形を保つ物品の方が力を維持しやすいからだとする説もある。',
    ],
    origins: [
      {
        title: '遺跡からの発見',
        description: '古代遺跡から発掘された神秘的な武具や道具を手に入れた考古学者',
      },
      {
        title: '神話時代からの継承',
        description: '神話の時代から現代まで受け継がれてきた聖なる武具の正統な継承者',
      },
      {
        title: '異世界からの来訪',
        description: '神話の世界や古代から現代にやって来た戦士や神の使い',
      },
    ],
    originsDescription: 'アーティファクトヒーローの神秘的な武具がどのようにして得られたかは様々である。キャラクター作成時に、自分のアーティファクトヒーローがどのような経緯で力を得たのかを考えてみよう。',
    originsNote: 'いずれの起源であっても、その武具は神代・古代の神秘的な力を宿した特別な存在なのだ。',
    abilityNote: 'アーティファクトは肉体・感覚・超常能力に優れた戦士系クラス。高いHPと神秘的な武具による多彩な戦闘能力を持つ。',
    playStyles: [
      {
        title: '戦闘での役割',
        color: 'bg-green-50',
        items: [
          '《古代兵装》で強力な武器を生成し白兵戦を主導',
          '《グラディエーター》による強力な白兵攻撃',
          '《エンシェントスペル》で武器の力を魔術攻撃に転換',
          '《ジャッジメントボルト》による神の裁きの一撃',
        ],
      },
      {
        title: '神秘的な防護と支援',
        color: 'bg-orange-50',
        items: [
          '《ミスティックアーマー》《守護神の加護》による高い防御力',
          '《神聖なる献身》で味方を守るカバーリング',
          '《黄金の果実》による奇跡の復活能力',
          '《オーラバトラー》でアーティファクト能力を強化',
        ],
      },
    ],
  };

  return <ClassPageLayout data={classData} />;
};