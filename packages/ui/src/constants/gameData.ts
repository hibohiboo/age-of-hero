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
} from 'react-icons/gi';
import { MdOutlineBolt, MdOutlinePsychology } from 'react-icons/md';
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
    description: '主に素手で攻撃や武器による力任せな攻撃に用いる技能。物をどかすなど災害救助にも役立つ。',
  },
  {
    name: 'タフネス',
    icon: GiShield,
    category: 'physical',
    color: 'text-red-600',
    description: '身体がどれだけダメージに耐えられるかを表す技能。防御などに用い、誰かを守るために必要だ。',
  },
  {
    name: 'スタミナ',
    icon: GiHeartPlus,
    category: 'physical',
    color: 'text-red-600',
    description: '身体の持久力や回復力を表す技能。長丁場や連続する任務で重要となる。',
  },
  {
    name: '技術',
    icon: GiKnifeThrust,
    category: 'reflex',
    color: 'text-blue-600',
    description: '主に武器や道具を上手く扱うために用いる技能。鍛錬次第で様々なことに役立つ。',
  },
  {
    name: '運動',
    icon: GiWalk,
    category: 'reflex',
    color: 'text-blue-600',
    description: '反射的な回避や素早い運動に用いる技能。ヴィランから人質を素早く取り戻すのにも役に立つ。',
  },
  {
    name: '操縦',
    icon: GiSteeringWheel,
    category: 'reflex',
    color: 'text-blue-600',
    description: '車や船、飛行機などの乗り物を乗りこなすための技能。車などでいち早く現場に駆けつけることもできる。',
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
    description: '様々なことに気づきやすくなる技能。ヴィランの奇襲から周囲を守ることもできる。',
  },
  {
    name: '製作',
    icon: GiTinker,
    category: 'sensory',
    color: 'text-green-600',
    description: '武器や道具、乗り物を作るのに用いる技能。自分の持物にギミックを仕込み事前の準備をする。',
  },
  {
    name: '芸術',
    icon: GiMusicalNotes,
    category: 'sensory',
    color: 'text-green-600',
    description: 'センスを用いて歌や絵画などを作る技能。センス次第で人々の荒れた心を癒すことも可能だ。',
  },
  {
    name: '情報',
    icon: GiMagnifyingGlass,
    category: 'intellectual',
    color: 'text-purple-600',
    description: '自分の力で情報を集める技能。逆に情報戦を仕掛けヴィランをかく乱することもできる。',
  },
  {
    name: '交渉',
    icon: GiSpeaker,
    category: 'intellectual',
    color: 'text-purple-600',
    description: '他人と交渉するために用いる技能。物品や情報を調達する際にも役立つ。',
  },
  {
    name: '心理',
    icon: MdOutlinePsychology,
    category: 'intellectual',
    color: 'text-purple-600',
    description: '相手の心情を読み取るのに用いる技能。相手の行動を先読みすることもできる。',
  },
  {
    name: '医療',
    icon: GiMedicalPack,
    category: 'intellectual',
    color: 'text-purple-600',
    description: 'ケガや病に対処するのに用いる技能。傷病者の命を救うのに必要だ。',
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
    label: '肉体系',
    icon: GiBiceps,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: '肉体的な力やその身体が持つ耐久力を表す能力値だ。',
  },
  {
    category: 'reflex' as const,
    label: '反射系',
    icon: MdOutlineBolt,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: '手先の器用さや反射神経の良さを表す能力値だ。',
  },
  {
    category: 'sensory' as const,
    label: '感覚系',
    icon: GiAlliedStar,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: '天性のセンスや感受性の高さなどを表す能力値だ。',
  },
  {
    category: 'intellectual' as const,
    label: '知力系',
    icon: GiBookshelf,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: '知識や頭脳をどれだけ上手く運用できるかを表す能力値だ。',
  },
  {
    category: 'supernatural' as const,
    label: '超常系',
    icon: GiMagicSwirl,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    description: '通常では考えられないような超常的な力を表す能力値だ。',
  },
] as const;