import { FaEye } from 'react-icons/fa';
import { FaRegHandshake } from 'react-icons/fa6';
import {
  GiRobotAntennas,
  GiCrystalBall,
  GiBrain,
  GiDna2,
  GiStarFormation,
  GiAncientSword,
  GiPunchingBag,
  GiBiceps,
  GiBookshelf,
  GiMagicSwirl,
  GiMuscleUp,
  GiFist,
  GiShield,
  GiHeartPlus,
  GiSteeringWheel,
  GiCrosshair,
  GiWalk,
  GiTinker,
  GiMusicalNotes,
  GiMagnifyingGlass,
  GiSpeaker,
  GiMedicalPack,
  GiSpellBook,
  GiThirdEye,
  GiKnifeThrust,
  GiAbstract061,
  GiModernCity,
  GiFireSilhouette,
  GiAlliedStar,
  GiBoxingGlove,
  GiButterflyKnife,
  GiChestArmor,
  GiClothes,
  GiCoffeeCup,
  GiGladius,
  GiHealthPotion,
  GiMechanicalArm,
  GiMedicines,
  GiPerson,
  GiRelicBlade,
  GiRifle,
  GiShop,
} from 'react-icons/gi';
import { MdOutlineBolt, MdOutlinePsychology } from 'react-icons/md';
import { ItemDetails } from '../components/ItemCard';
import type { IconType } from 'react-icons';

export interface ClassData {
  name: string;
  icon: IconType;
  color: string;
  path: string;
}

export interface AbilityData {
  key: 'physical' | 'reflex' | 'sensory' | 'intellectual' | 'supernatural';
  label: string;
  icon: IconType;
  color: string;
}

export interface SkillData {
  name: string;
  icon: IconType;
  category: 'physical' | 'reflex' | 'sensory' | 'intellectual' | 'supernatural';
  color: string;
  description: string;
}

export interface CommonSkillData {
  name: string;
  icon: IconType;
  description: string;
}

export const CLASSES: ClassData[] = [
  {
    name: 'マッスル',
    icon: GiMuscleUp,
    color: 'text-red-600',
    path: 'character/muscle',
  },
  {
    name: 'テクノロジー',
    icon: GiRobotAntennas,
    color: 'text-blue-600',
    path: 'character/technology',
  },
  {
    name: 'マジカル',
    icon: GiCrystalBall,
    color: 'text-purple-600',
    path: 'character/magical',
  },
  {
    name: 'サイキック',
    icon: GiBrain,
    color: 'text-pink-600',
    path: 'character/psychic',
  },
  {
    name: 'バイオ',
    icon: GiDna2,
    color: 'text-green-600',
    path: 'character/bio',
  },
  {
    name: 'エスペラント',
    icon: GiStarFormation,
    color: 'text-yellow-600',
    path: 'character/esperanto',
  },
  {
    name: 'アーティファクト',
    icon: GiAncientSword,
    color: 'text-orange-600',
    path: 'character/artifact',
  },
  {
    name: 'アーツ',
    icon: GiPunchingBag,
    color: 'text-teal-600',
    path: 'character/arts',
  },
] as const;

export const ABILITIES: AbilityData[] = [
  {
    key: 'physical',
    label: '肉体',
    icon: GiBiceps,
    color: 'text-red-600',
  },
  {
    key: 'reflex',
    label: '反射',
    icon: MdOutlineBolt,
    color: 'text-blue-600',
  },
  {
    key: 'sensory',
    label: '感覚',
    icon: GiAlliedStar,
    color: 'text-green-600',
  },
  {
    key: 'intellectual',
    label: '知力',
    icon: GiBookshelf,
    color: 'text-purple-600',
  },
  {
    key: 'supernatural',
    label: '超常',
    icon: GiMagicSwirl,
    color: 'text-indigo-600',
  },
] as const;

export const SKILLS: SkillData[] = [
  {
    name: 'パワー',
    icon: GiFist,
    category: 'physical',
    color: 'text-red-600',
    description:
      '主に素手で攻撃や武器による力任せな攻撃に用いる技能。物をどかすなど災害救助にも役立つ。',
  },
  {
    name: 'タフネス',
    icon: GiShield,
    category: 'physical',
    color: 'text-red-600',
    description:
      '身体がどれだけダメージに耐えられるかを表す技能。防御などに用い、誰かを守るために必要だ。',
  },
  {
    name: 'スタミナ',
    icon: GiHeartPlus,
    category: 'physical',
    color: 'text-red-600',
    description:
      '身体の持久力や回復力を表す技能。長丁場や連続する任務で重要となる。',
  },
  {
    name: '技術',
    icon: GiKnifeThrust,
    category: 'reflex',
    color: 'text-blue-600',
    description:
      '主に武器や道具を上手く扱うために用いる技能。鍛錬次第で様々なことに役立つ。',
  },
  {
    name: '運動',
    icon: GiWalk,
    category: 'reflex',
    color: 'text-blue-600',
    description:
      '反射的な回避や素早い運動に用いる技能。ヴィランから人質を素早く取り戻すのにも役に立つ。',
  },
  {
    name: '操縦',
    icon: GiSteeringWheel,
    category: 'reflex',
    color: 'text-blue-600',
    description:
      '車や船、飛行機などの乗り物を乗りこなすための技能。車などでいち早く現場に駆けつけることもできる。',
  },
  {
    name: '射撃',
    icon: GiCrosshair,
    category: 'sensory',
    color: 'text-green-600',
    description: '銃や弓を用いて射撃を行う技能。長距離狙撃からガンカタまで。',
  },
  {
    name: '知覚',
    icon: FaEye,
    category: 'sensory',
    color: 'text-green-600',
    description:
      '様々なことに気づきやすくなる技能。ヴィランの奇襲から周囲を守ることもできる。',
  },
  {
    name: '製作',
    icon: GiTinker,
    category: 'sensory',
    color: 'text-green-600',
    description:
      '武器や道具、乗り物を作るのに用いる技能。自分の持物にギミックを仕込み事前の準備をする。',
  },
  {
    name: '芸術',
    icon: GiMusicalNotes,
    category: 'sensory',
    color: 'text-green-600',
    description:
      'センスを用いて歌や絵画などを作る技能。センス次第で人々の荒れた心を癒すことも可能だ。',
  },
  {
    name: '情報',
    icon: GiMagnifyingGlass,
    category: 'intellectual',
    color: 'text-purple-600',
    description:
      '自分の力で情報を集める技能。逆に情報戦を仕掛けヴィランをかく乱することもできる。',
  },
  {
    name: '交渉',
    icon: GiSpeaker,
    category: 'intellectual',
    color: 'text-purple-600',
    description:
      '他人と交渉するために用いる技能。物品や情報を調達する際にも役立つ。',
  },
  {
    name: '心理',
    icon: MdOutlinePsychology,
    category: 'intellectual',
    color: 'text-purple-600',
    description:
      '相手の心情を読み取るのに用いる技能。相手の行動を先読みすることもできる。',
  },
  {
    name: '医療',
    icon: GiMedicalPack,
    category: 'intellectual',
    color: 'text-purple-600',
    description:
      'ケガや病に対処するのに用いる技能。傷病者の命を救うのに必要だ。',
  },
  {
    name: '魔術',
    icon: GiSpellBook,
    category: 'supernatural',
    color: 'text-indigo-600',
    description: '魔術を用いる技能。魔術の種類は多岐にわたる。',
  },
  {
    name: '超能力',
    icon: GiThirdEye,
    category: 'supernatural',
    color: 'text-indigo-600',
    description: 'ESPやサイコキネシスなどの超能力を用いる技能。',
  },
  {
    name: '第六感',
    icon: GiAbstract061,
    category: 'supernatural',
    color: 'text-indigo-600',
    description: '五感以外の感覚でものをとらえる技能。時に周囲の助けとなる。',
  },
] as const;

export const COMMON_SKILLS: CommonSkillData[] = [
  {
    name: '〈社会〉',
    icon: GiModernCity,
    description:
      'どのような社会や組織に所属しているかを表す技能。代表的なものはヒーロー協会、企業、警察、裏社会などだ。取得時には〈社会：ヒーロー協会〉といった形で記載し、それぞれ別技能として扱う。',
  },
  {
    name: '〈コネ〉',
    icon: FaRegHandshake,
    description: 'どのような人物とコネクションを持っているかを表す技能。',
  },
  {
    name: '〈意志〉',
    icon: GiFireSilhouette,
    description: '心の強さを表す技能。ヒーローに必須の力だ。',
  },
] as const;

export const ABILITY_CATEGORIES = [
  {
    category: 'physical' as const,
    label: '肉体',
    icon: GiBiceps,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: '肉体的な力やその身体が持つ耐久力を表す能力値だ。',
  },
  {
    category: 'reflex' as const,
    label: '反射',
    icon: MdOutlineBolt,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: '手先の器用さや反射神経の良さを表す能力値だ。',
  },
  {
    category: 'sensory' as const,
    label: '感覚',
    icon: GiAlliedStar,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: '天性のセンスや感受性の高さなどを表す能力値だ。',
  },
  {
    category: 'intellectual' as const,
    label: '知力',
    icon: GiBookshelf,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: '知識や頭脳をどれだけ上手く運用できるかを表す能力値だ。',
  },
  {
    category: 'supernatural' as const,
    label: '超常',
    icon: GiMagicSwirl,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    description: '通常では考えられないような超常的な力を表す能力値だ。',
  },
] as const;

export const weapons = [
  {
    name: '素手',
    icon: GiFist,
    details: {
      type: '白兵',
      skill: '〈パワー〉',
      modifier: '０％',
      attackPower: '０',
      guardValue: '０',
      range: '至近',
      price: 0,
      effect:
        '武器が何も装備されていない場合、この武器が装備されているものとして扱う。',
    } as ItemDetails,
  },
  {
    name: '格闘武器',
    icon: GiBoxingGlove,
    details: {
      type: '白兵',
      skill: '〈パワー〉',
      modifier: '＋０％',
      attackPower: '＋４',
      guardValue: '３',
      range: '至近',
      price: 4,
    } as ItemDetails,
  },
  {
    name: '片手白兵武器Ａ',
    icon: GiButterflyKnife,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '＋５％',
      attackPower: '＋５',
      guardValue: '３',
      range: '至近',
      price: 5,
    } as ItemDetails,
  },
  {
    name: '片手白兵武器Ｂ',
    icon: GiGladius,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '＋０％',
      attackPower: '＋８',
      guardValue: '０',
      range: '至近',
      price: 7,
    } as ItemDetails,
  },
  {
    name: '片手白兵武器Ｃ',
    icon: GiButterflyKnife,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '＋１０％',
      attackPower: '＋２',
      guardValue: '２',
      range: '至近',
      price: 5,
    } as ItemDetails,
  },
  {
    name: '片手白兵武器Ｄ',
    icon: GiGladius,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '－５％',
      attackPower: '＋５',
      guardValue: '０',
      range: '近',
      price: 6,
    } as ItemDetails,
  },
  {
    name: '両手白兵武器Ａ',
    icon: GiRelicBlade,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '－１０％',
      attackPower: '＋７',
      guardValue: '３',
      range: '至近',
      price: 7,
      effect: '両手持ち。',
    } as ItemDetails,
  },
  {
    name: '両手白兵武器Ｂ',
    icon: GiRelicBlade,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '－１５％',
      attackPower: '＋９',
      guardValue: '４',
      range: '至近',
      price: 8,
      effect: '両手持ち。',
    } as ItemDetails,
  },
  {
    name: '両手白兵武器Ｃ',
    icon: GiRelicBlade,
    details: {
      type: '白兵',
      skill: '〈技術〉',
      modifier: '－１０％',
      attackPower: '＋５',
      guardValue: '４',
      range: '近',
      price: 8,
      effect: '両手持ち。',
    } as ItemDetails,
  },
  {
    name: '射撃武器Ａ',
    icon: GiRifle,
    details: {
      type: '射撃',
      skill: '〈射撃〉',
      modifier: '＋０％',
      attackPower: '＋５',
      guardValue: '０',
      range: '近',
      price: 6,
    } as ItemDetails,
  },
  {
    name: '射撃武器Ｂ',
    icon: GiRifle,
    details: {
      type: '射撃',
      skill: '〈射撃〉',
      modifier: '＋０％',
      attackPower: '＋７',
      guardValue: '０',
      range: '中',
      price: 9,
      effect: '至近距離不可。',
    } as ItemDetails,
  },
  {
    name: '射撃武器Ｃ',
    icon: GiRifle,
    details: {
      type: '射撃',
      skill: '〈射撃〉',
      modifier: '＋５％',
      attackPower: '＋６',
      guardValue: '０',
      range: '近',
      price: 8,
      effect: '至近距離不可。',
    } as ItemDetails,
  },
  {
    name: '射撃武器Ｄ',
    icon: GiRifle,
    details: {
      type: '射撃',
      skill: '〈射撃〉',
      modifier: '＋１０％',
      attackPower: '＋１０',
      guardValue: '０',
      range: '遠',
      price: 12,
      effect: '至近距離不可。両手持ち。',
    } as ItemDetails,
  },
  {
    name: '射撃武器Ｅ',
    icon: GiRifle,
    details: {
      type: '射撃',
      skill: '〈射撃〉',
      modifier: '＋０％',
      attackPower: '＋５',
      guardValue: '０',
      range: '近',
      price: 6,
      effect: 'この武器での攻撃の対象は範囲になる。シーンに１回使用可能。',
    } as ItemDetails,
  },
  {
    name: 'シールドＡ',
    icon: GiShield,
    details: {
      type: '白兵',
      skill: '〈パワー〉',
      modifier: '＋０％',
      attackPower: '＋２',
      guardValue: '４',
      range: '至近',
      price: 5,
    } as ItemDetails,
  },
  {
    name: 'シールドＢ',
    icon: GiShield,
    details: {
      type: '白兵',
      skill: '〈パワー〉',
      modifier: '－１０％',
      attackPower: '＋２',
      guardValue: '６',
      range: '至近',
      price: 7,
    } as ItemDetails,
  },
  {
    name: 'シールドＣ',
    icon: GiShield,
    details: {
      type: '白兵',
      skill: '〈パワー〉',
      modifier: '－２０％',
      attackPower: '＋２',
      guardValue: '８',
      range: '至近',
      price: 10,
      effect: '両手持ち。',
    } as ItemDetails,
  },
];

export const armor = [
  {
    name: 'コスチュームＡ',
    icon: GiClothes,
    details: {
      type: '防具',
      dodge: '＋０％',
      actionValue: '＋０',
      protection: '５',
      price: 5,
    } as ItemDetails,
  },
  {
    name: 'コスチュームＢ',
    icon: GiClothes,
    details: {
      type: '防具',
      dodge: '＋５％',
      actionValue: '＋０',
      protection: '３',
      price: 5,
    } as ItemDetails,
  },
  {
    name: 'コスチュームＣ',
    icon: GiClothes,
    details: {
      type: '防具',
      dodge: '－５％',
      actionValue: '－２',
      protection: '８',
      price: 5,
    } as ItemDetails,
  },
  {
    name: 'アーマー',
    icon: GiChestArmor,
    details: {
      type: '防具',
      dodge: '－１０％',
      actionValue: '－４',
      protection: '１０',
      price: 7,
    } as ItemDetails,
  },
  {
    name: 'サイコスーツ',
    icon: GiChestArmor,
    details: {
      type: '防具',
      dodge: '－１０％',
      actionValue: '－１',
      protection: '２',
      price: 10,
      effect: '装備中、【超常】に属する技能での判定の判定値に＋５％する。',
    } as ItemDetails,
  },
];

export const consumables = [
  {
    name: 'ソーマ',
    icon: GiHealthPotion,
    details: {
      type: '消耗品',
      price: 4,
      effect:
        'マイナーアクション、メジャーアクションで使用可能。ＨＰを２Ｄ点回復する。',
    } as ItemDetails,
  },
  {
    name: 'スキルサプライ',
    icon: GiMedicines,
    details: {
      type: '消耗品',
      price: 6,
      effect:
        'マイナーアクション、メジャーアクションで使用可能。ＳＰを２Ｄ点回復する。',
    } as ItemDetails,
  },
  {
    name: '嗜好品',
    icon: GiCoffeeCup,
    details: {
      type: '消耗品',
      price: 2,
      effect:
        'マイナーアクション、メジャーアクションで使用可能。ＳＰを５点回復する。',
    } as ItemDetails,
  },
];

export const otherItems = [
  {
    name: 'お気に入りの店',
    icon: GiShop,
    details: {
      type: 'その他',
      price: 8,
      effect:
        'ミドルパートでのみ使用可能。シーンの舞台を変更し、そのシーンの終了時に登場していたＰＣ全員はＨＰかＭＰを１Ｄ点回復する。ＧＭは状況に応じてこのアイテムの使用を拒否してもよいが、その場合このアイテムの使用回数には数えない。１シナリオで３回まで使用可能。',
    } as ItemDetails,
  },
  {
    name: 'コネクション：ヒーロー協会',
    icon: FaRegHandshake,
    details: {
      type: 'その他',
      price: 2,
      effect:
        'ミドルパートの情報収集で使用可能。〈社会：ヒーロー協会〉を使用した判定の判定値に＋１０％する。',
    } as ItemDetails,
  },
  {
    name: 'コネクション：企業',
    icon: FaRegHandshake,
    details: {
      type: 'その他',
      price: 2,
      effect:
        'ミドルパートの情報収集で使用可能。〈社会：企業〉を使用した判定の判定値に＋１０％する。',
    } as ItemDetails,
  },
  {
    name: 'コネクション：警察機構',
    icon: FaRegHandshake,
    details: {
      type: 'その他',
      price: 2,
      effect:
        'ミドルパートの情報収集で使用可能。〈社会：警察〉を使用した判定の判定値に＋１０％する。',
    } as ItemDetails,
  },
  {
    name: 'コネクション：情報屋',
    icon: FaRegHandshake,
    details: {
      type: 'その他',
      price: 2,
      effect:
        'ミドルパートの情報収集で使用可能。〈社会：裏社会〉を使用した判定の判定値に＋１０％する。',
    } as ItemDetails,
  },
  {
    name: 'コネクション：学校関係者',
    icon: FaRegHandshake,
    details: {
      type: 'その他',
      price: 2,
      effect:
        'ミドルパートの情報収集で使用可能。〈社会：スクール〉を使用した判定の判定値に＋１０％する。',
    } as ItemDetails,
  },
  {
    name: 'バディ',
    icon: GiPerson,
    details: {
      type: 'その他',
      price: 2,
      effect:
        'ミドルパートの情報収集で使用可能。〈社会：○○〉を使用した判定の判定値に＋１０％する。１シナリオに１回使用可能。',
    } as ItemDetails,
  },
];

export const technologyItems = [
  {
    name: 'パワードスーツ',
    icon: GiMechanicalArm,
    details: {
      type: '防具',
      dodge: '＋０％',
      actionValue: '＋０',
      protection: '１０',
      price: 0,
      effect:
        '装備中、素手のダメージを＋５し、〈パワー〉判定を〈操縦〉で代用してもよい。',
    } as ItemDetails,
  },
  {
    name: 'ガンソード',
    icon: GiMechanicalArm,
    details: {
      type: '白兵/射撃',
      skill: '〈白兵〉/〈射撃〉',
      modifier: '－１０％',
      attackPower: '＋１０/＋７',
      guardValue: '５',
      range: '至近/中',
      price: 0,
      effect:
        '白兵攻撃を行う際は左側のデータを、射撃攻撃を行う際は右側のデータを使用する。射撃攻撃は至近距離不可。',
    } as ItemDetails,
  },
  {
    name: '四連装スプリットミサイル',
    icon: GiMechanicalArm,
    details: {
      type: '射撃',
      skill: '〈射撃〉',
      modifier: '＋０％',
      attackPower: '＋１２',
      guardValue: '０',
      range: '遠距離',
      price: 0,
      effect:
        '至近距離、近距離への使用不可。この武器での攻撃の対象は範囲になり、ダメージ算出時防護点を無視する。シーンに１回使用可能。',
    } as ItemDetails,
  },
  {
    name: '加速装置',
    icon: GiMechanicalArm,
    details: {
      type: '消耗品',
      price: 0,
      effect:
        'スタートプロセスに使用し、そのラウンド中の行動値＋１０。シーンに１回使用可能。',
    } as ItemDetails,
  },
  {
    name: 'サポートＡＩ',
    icon: GiMechanicalArm,
    details: {
      type: 'その他',
      price: 0,
      effect:
        '自分が何らかの判定を行った直後に使用する。その判定を振り直す。シナリオに３回使用可能。',
    } as ItemDetails,
  },
  {
    name: 'ロケットブースター',
    icon: GiMechanicalArm,
    details: {
      type: 'その他',
      price: 0,
      effect:
        'ムーブアクションに使用し、二段回移動を行う。この移動では移動妨害されない。',
    } as ItemDetails,
  },
];
