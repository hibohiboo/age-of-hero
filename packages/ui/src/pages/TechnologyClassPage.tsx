import React from 'react';
import {
  GiRobotGrab,
  GiMechaHead,
  GiRayGun,
  GiBiceps,
  GiAlliedStar,
  GiBookshelf,
  GiMagicSwirl,
  GiRobotAntennas,
} from 'react-icons/gi';
import { MdOutlineBolt } from 'react-icons/md';
import { ClassPageLayout, ClassPageData } from '../components/ClassPageLayout';

export const TechnologyClassPage: React.FC = () => {
  const classData: ClassPageData = {
    className: 'テクノロジー',
    description:
      '最先端技術の申し子たるヒーローたち。新技術の粋を集めたパワードスーツや、自ら開発したアイデア兵器などを使用して戦闘や救助を行う。',
    classIcon: '⚙️',
    abilityStats: [
      { name: '肉体', value: 1, icon: GiBiceps, color: 'bg-red-100' },
      { name: '反射', value: 2, icon: MdOutlineBolt, color: 'bg-yellow-100' },
      { name: '感覚', value: 3, icon: GiAlliedStar, color: 'bg-blue-100' },
      { name: '知力', value: 2, icon: GiBookshelf, color: 'bg-purple-100' },
      { name: '超常', value: 0, icon: GiMagicSwirl, color: 'bg-gray-100' },
    ],
    hpSp: [
      { name: 'ＨＰ', value: 30, color: 'bg-red-100' },
      { name: 'ＳＰ', value: 25, color: 'bg-blue-100' },
    ],

    classSkills: [
      {
        name: '《スペシャルツール》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 5,
          timing: '常時',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 'なし',
          effect:
            'テクノロジー専用アイテムを１つ取得する。このヒーロースキルのＬｖが３以上になったならば追加で１つ、Ｌｖが５以上になったならば更に追加で１つ取得する',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《アイテムボックス》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈製作〉',
          target: '装備ひとつ',
          range: '至近',
          cost: 6,
          effect:
            '装備ひとつを対象に〈製作〉技能での判定を行う。判定に成功したならば、対象の「攻撃力」「防護点」「ガード値」「修正」の内のひとつを＋[Ｌｖ＋１]する。同じ装備品の同じデータに対しては効果は重複しない。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《ツールファイト》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈操縦〉〈射撃〉',
          target: '単体',
          range: '武器',
          cost: 4,
          effect:
            'このヒーロースキルを組み合わせた〈操縦〉〈射撃〉技能の判定値を＋[（Ｌｖ×１０）＋１０]％する。攻撃に組み合わせて使用した場合、コンボ２として扱う。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《バリア発生装置》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 5,
          timing: 'オート',
          skill: 'なし',
          target: '単体',
          range: '近距離',
          cost: 4,
          effect:
            'ダメージロールの直後に使用する。対象が受けるダメージを[Ｌｖ×２]＋２Ｄ軽減する。ラウンドに１回使用可能。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《研究費用》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 10,
          timing: '常時',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 'なし',
          effect: 'あなたは常備化点をＬｖ×５点追加で取得する。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《デポジッション》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 1,
          timing: '行動値チェック',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 3,
          effect:
            'あなたの装備しているアイテムひとつを装備から外し、あなたの所持していることなるアイテムひとつを即座に装備する。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《リアクターパルス》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 3,
          timing: 'オート',
          skill: 'なし',
          target: '単体',
          range: '中',
          cost: 4,
          effect:
            '対象が何らかの判定を行う直前に使用する。対象の判定値を－[Ｌｖ×１０]％する。ラウンドに１回使用可能。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《エネルギーレイ》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 3,
          timing: 'マイナー',
          skill: 'なし',
          target: '自身',
          range: 'なし',
          cost: 6,
          effect:
            'あなたがそのメインプロセス中に行う攻撃ではダメージを＋[Ｌｖ×３]し、防護点を無視してダメージを算出する。シーンにＬｖ回使用可能。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《バラージショット》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 5,
          timing: 'メジャーアクション',
          skill: '〈射撃〉',
          target: '範囲（選択）',
          range: '武器',
          cost: 7,
          effect:
            'このヒーロースキルを組み合わせた攻撃の対象を範囲（選択）に変更する。また、この攻撃のダメージに[Ｌｖ＋５]する。シーンに１回使用可能。このヒーロースキルのＬｖが３以上になったならばシーンに２回、Ｌｖが５以上になったならばシーンに３回使用可能。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        name: '《リミッター解除》',
        icon: GiRobotAntennas,
        details: {
          maxLv: 3,
          timing: 'セットアップ',
          skill: 'なし',
          target: '効果参照',
          range: '至近',
          cost: 'ＦＣ',
          effect:
            'あなたが装備しているアイテムひとつを対象とする。ファンチットを任意の枚数消費し、対象の「攻撃力」「防護点」「ガード値」「行動値」「修正」のうち[消費したＦＣ]個に＋[（Ｌｖ×３）＋２]する。判定値への修正については＋[Ｌｖ×５]％する。シナリオに１回使用可能。',
        },
        color: 'bg-cyan-50 border-cyan-200',
      },
    ],
    characteristics: [
      {
        title: '最先端技術の申し子',
        icon: GiMechaHead,
        description:
          '新技術の粋を集めたパワードスーツや、自ら開発したアイデア兵器などを使用して戦闘や救助を行う',
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        title: '特殊機構の使い手',
        icon: GiRayGun,
        description:
          '普通では扱えないような特殊な機構を持つアイテムを最も効果的に扱えるヒーロー',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: '多様なアイテム',
        icon: GiRobotGrab,
        description:
          '企業や組織から与えられたもの、自らの手で開発したもの、未来の不可思議な技術で作られたものなど様々',
        color: 'bg-green-50 border-green-200',
      },
    ],
    characteristicsDescription: [
      '最先端技術の申し子たるヒーローたちだ。新技術の粋を集めたパワードスーツや、自ら開発したアイデア兵器などを使用して戦闘や救助を行う。アイテムに頼りがちのように思われることもあるが、彼らは普通では扱えないような特殊な機構を持つアイテムを最も効果的に扱えるヒーローなのだ。',
      '身に付けるアイテムは企業や組織から与えられたものや、自らの手で開発したもの、果ては未来の不可思議な技術で作られたものであったりと様々だ。しかし、それらは一様に強力で、持ち主であるヒーローのみが扱えるのである。',
    ],
    origins: [
      {
        title: '企業・組織支給',
        description: '企業や組織から与えられたパワードスーツや特殊装備',
      },
      {
        title: '自己開発',
        description: '自らの手で開発したアイデア兵器や発明品',
      },
      {
        title: '未来の技術',
        description: '未来の不可思議な技術で作られた謎の装置',
      },
    ],
    originsDescription:
      'テクノロジーヒーローの装備がどのようにして得られたかは様々である。キャラクター作成時に、自分のテクノロジーヒーローがどのような経緯で装備を得たのかを考えてみよう。',
    originsNote:
      'いずれの起源であっても、それらの装備は一様に強力で、持ち主であるヒーローのみが扱える特別な存在なのだ。',
    abilityNote:
      'テクノロジーは感覚能力（3）に特化し、知力・反射も平均的な値を持つ技術特化型クラス。肉体は低く、超常能力は持たないが、アイテムによって多様な能力を発揮できる。',
    playStyles: [
      {
        title: '戦闘での役割',
        color: 'bg-green-50',
        items: [
          '《ツールファイト》による射撃・操縦攻撃の強化',
          '《バラージショット》による範囲攻撃',
          '《エネルギーレイ》で防護点を無視した攻撃',
          '《バリア発生装置》による味方の防護',
        ],
      },
      {
        title: 'アイテム活用',
        color: 'bg-orange-50',
        items: [
          '《スペシャルツール》でテクノロジー専用アイテム取得',
          '《アイテムボックス》で装備の性能強化',
          '《研究費用》で豊富な常備化点を活用',
          '《デポジッション》による状況に応じた装備変更',
        ],
      },
    ],
  };

  return <ClassPageLayout data={classData} />;
};
