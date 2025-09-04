import React from 'react';
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
import { Link } from 'react-router';
import { ClassStatsTable } from '../components/ClassStatsTable';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { StepList } from '../components/StepList';

export const CharacterCreationPage: React.FC = () => {
  const classes = [
    {
      name: 'マッスル',
      icon: GiMuscleUp,
      color: 'bg-red-100 text-red-800 border-red-300',
    },
    {
      name: 'テクノロジー',
      icon: GiRobotAntennas,
      color: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
      name: 'マジカル',
      icon: GiCrystalBall,
      color: 'bg-purple-100 text-purple-800 border-purple-300',
    },
    {
      name: 'サイキック',
      icon: GiBrain,
      color: 'bg-pink-100 text-pink-800 border-pink-300',
    },
    {
      name: 'バイオ',
      icon: GiDna2,
      color: 'bg-green-100 text-green-800 border-green-300',
    },
    {
      name: 'エスペラント',
      icon: GiStarFormation,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    },
    {
      name: 'アーティファクト',
      icon: GiAncientSword,
      color: 'bg-orange-100 text-orange-800 border-orange-300',
    },
    {
      name: 'アーツ',
      icon: GiPunchingBag,
      color: 'bg-teal-100 text-teal-800 border-teal-300',
    },
  ];

  const abilities = [
    {
      category: '【肉体】',
      icon: GiBiceps,
      description: '肉体的な力やその身体が持つ耐久力を表す能力値だ。',
      skills: [
        {
          name: '〈パワー〉',
          icon: GiFist,
          description:
            '主に素手で攻撃や武器による力任せな攻撃に用いる技能。物をどかすなど災害救助にも役立つ。',
        },
        {
          name: '〈タフネス〉',
          icon: GiShield,
          description:
            '身体がどれだけダメージに耐えられるかを表す技能。防御などに用い、誰かを守るために必要だ。',
        },
        {
          name: '〈スタミナ〉',
          icon: GiHeartPlus,
          description:
            '身体の持久力や回復力を表す技能。長丁場や連続する任務で重要となる。',
        },
      ],
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      category: '【反射】',
      icon: MdOutlineBolt,
      description: '手先の器用さや反射神経の良さを表す能力値だ。',
      skills: [
        {
          name: '〈技術〉',
          icon: GiKnifeThrust,
          description:
            '主に武器や道具を上手く扱うために用いる技能。鍛錬次第で様々なことに役立つ。',
        },
        {
          name: '〈運動〉',
          icon: GiWalk,
          description:
            '反射的な回避や素早い運動に用いる技能。ヴィランから人質を素早く取り戻すのにも役に立つ。',
        },
        {
          name: '〈操縦〉',
          icon: GiSteeringWheel,
          description:
            '車や船、飛行機などの乗り物を乗りこなすための技能。車などでいち早く現場に駆けつけることもできる。',
        },
      ],
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      category: '【感覚】',
      icon: GiAlliedStar,
      description: '天性のセンスや感受性の高さなどを表す能力値だ。',
      skills: [
        {
          name: '〈射撃〉',
          icon: GiCrosshair,
          description:
            '銃や弓を用いて射撃を行う技能。長距離狙撃からガンカタまで。',
        },
        {
          name: '〈知覚〉',
          icon: FaEye,
          description:
            '様々なことに気づきやすくなる技能。ヴィランの奇襲から周囲を守ることもできる。',
        },
        {
          name: '〈製作〉',
          icon: GiTinker,
          description:
            '武器や道具、乗り物を作るのに用いる技能。自分の持物にギミックを仕込み事前の準備をする。',
        },
        {
          name: '〈芸術〉',
          icon: GiMusicalNotes,
          description:
            'センスを用いて歌や絵画などを作る技能。センス次第で人々の荒れた心を癒すことも可能だ。',
        },
      ],
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      category: '【知力】',
      icon: GiBookshelf,
      description: '知識や頭脳をどれだけ上手く運用できるかを表す能力値だ。',
      skills: [
        {
          name: '〈情報〉',
          icon: GiMagnifyingGlass,
          description:
            '自分の力で情報を集める技能。逆に情報戦を仕掛けヴィランをかく乱することもできる。',
        },
        {
          name: '〈交渉〉',
          icon: GiSpeaker,
          description:
            '他人と交渉するために用いる技能。物品や情報を調達する際にも役立つ。',
        },
        {
          name: '〈心理〉',
          icon: MdOutlinePsychology,
          description:
            '相手の心情を読み取るのに用いる技能。相手の行動を先読みすることもできる。',
        },
        {
          name: '〈医療〉',
          icon: GiMedicalPack,
          description:
            'ケガや病に対処するのに用いる技能。傷病者の命を救うのに必要だ。',
        },
      ],
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      category: '【超常】',
      icon: GiMagicSwirl,
      description: '通常では考えられないような超常的な力を表す能力値だ。',
      skills: [
        {
          name: '〈魔術〉',
          icon: GiSpellBook,
          description: '魔術を用いる技能。魔術の種類は多岐にわたる。',
        },
        {
          name: '〈超能力〉',
          icon: GiThirdEye,
          description: 'ESPやサイコキネシスなどの超能力を用いる技能。',
        },
        {
          name: '〈第六感〉',
          icon: GiAbstract061,
          description:
            '五感以外の感覚でものをとらえる技能。時に周囲の助けとなる。',
        },
      ],
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'クラスを2つ選択',
      description: 'この際同じクラスを2回選択してもよい。',
    },
    {
      number: 2,
      title: '基本能力値を計算',
      description:
        'クラスに設定された能力値を合計する。その後、任意の能力値に１点追加する。',
    },
    {
      number: 3,
      title: '追加の技能ポイント150%を分配',
      description: 'キャラクターの個性を表現する能力値の調整',
    },
    {
      number: 4,
      title: 'ヒーロースキル7レベルを習得',
      description: 'クラスに応じた特殊能力を選択',
    },
    {
      number: 5,
      title: '必殺技1レベルを習得',
      description: 'キャラクター独自の強力な技を作成',
    },
    {
      number: 6,
      title: 'アイテム20点分を購入',
      description: '装備や道具でキャラクターを強化',
    },
    {
      number: 7,
      title: 'HP・SPを算出',
      description: '生命力とスキルポイントの計算',
    },
    {
      number: 8,
      title: '行動値を決定',
      description: '戦闘時の行動順序を決める値を算出',
    },
  ];

  const commonSkills = [
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
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <PageHeader
        title="キャラクター作成"
        description="　キミが「Age of Hero」をプレイヤーとして遊ぼうとするならば、キミが「Age of Hero」世界で動かすプレイヤー・キャラクター（PC）を作る必要がある。キミの作ったPCはひとりのヒーローとなり、人を救い、ヴィランと戦うことになる。
「Age of Hero」では、PCはその身体的強さや技術を表す数値と、それぞれが得意とする技であるヒーロースキル、所持するアイテムなどによって表現される。そこに名前や年齢、性別、ヒーローとなった経緯などを加えて、ひとりのキャラクターとなるのだ。"
        centered
      />

      <div className="space-y-12">
        <Section title="キャラクターの要素" icon="🎭">
          <p className="text-gray-600 mb-6">
            キャラクター作成において、キミのヒーローを構成する要素がいくつも存在する。まずはそれらの要素について説明しよう。
          </p>
        </Section>

        <Section title="クラス">
          <p className="text-gray-600 mb-6">
            クラスとはヒーローたちの持つ超常の力を表すものだ。
            クラスはその能力の系統ごとに八種類に分かれている。PCはこれらの内からクラスを二つ選ぶことになる。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {classes.map((classItem) => {
              const IconComponent = classItem.icon;
              return (
                <div
                  key={classItem.name}
                  className={`p-3 sm:p-4 rounded-lg border-2 ${classItem.color} text-center font-medium hover:scale-105 transition-transform cursor-pointer`}
                >
                  <IconComponent className="mx-auto mb-2" size={24} />
                  {classItem.name}
                </div>
              );
            })}
          </div>
          <p className="text-gray-600 mt-6">
            例えば、クラスが「マッスル」と「バイオ」であれば、「身体改造によって人間以外の動物の能力を移植され、その強力なパワーで戦うヒーロー」というようなキャラクターになるだろう。
            クラスの詳細については、各クラスデータの解説を参照してほしい。
          </p>
        </Section>

        <Section title="能力値と技能">
          <p className="text-gray-600 mb-6">
            能力値はそのヒーローがバイタル・メンタルなどの面でどれほどの強さがあるかを表している。技能はヒーローが具体的にどのようなことができるのかを表すパラメーターとなるのだ。
            各能力値と技能の詳細は以下の通り。
          </p>
          <div className="grid gap-8">
            {abilities.map((ability) => (
              <div
                key={ability.category}
                className={`p-4 sm:p-6 rounded-lg border-2 ${ability.bgColor} ${ability.borderColor}`}
              >
                <h3
                  className={`text-lg sm:text-xl font-semibold mb-3 ${ability.color} flex items-center gap-2`}
                >
                  <ability.icon size={24} />
                  {ability.category}
                </h3>
                <p className="text-gray-600 mb-4">{ability.description}</p>
                <div className="space-y-4">
                  {ability.skills.map((skill) => (
                    <div key={skill.name} className="ml-4">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <skill.icon size={18} />
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="共通取得技能">
          <p className="text-gray-600 mb-6">
            能力値に左右されない技能を指す。以下の三つが存在する。
          </p>
          <div className="space-y-6">
            {commonSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg"
              >
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <skill.icon size={18} />
                  {skill.name}
                </h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="作成手順" icon="📋">
          <StepList steps={steps} />
        </Section>
        <Section title="基本能力値を計算" step={2}>
          <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
            <p className="text-gray-700 mb-4">
              クラスに設定された能力値を合計する。同じクラスを二回選択した場合、そのクラスに設定された能力値を二倍にする。その後、任意の能力値に１点追加する。{' '}
            </p>
            <ClassStatsTable />
          </div>
        </Section>
        <Section title="技能ポイント分配" step={3}>
          <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
            <p className="text-gray-700">
              能力値×１０％が各技能の初期値となる。その後、技能を１５０％分追加で割り振る。
              ひとつの技能に割り振ることのできるポイントの上限は１００％である。この際、初期値と割り振った技能の合計が１００％を超えるように取得しても構わない。{' '}
            </p>
          </div>
        </Section>

        <Section title="ヒーロースキル" step={5}>
          <div className="p-4 bg-pink-50 border-l-4 border-pink-400 rounded">
            <p className="text-gray-700">
              ヒーロースキルを合計７Ｌｖ分習得する。
            </p>
          </div>
        </Section>

        <Section title="必殺技" step={6}>
          <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
            <p className="text-gray-700">必殺技１Ｌｖを習得する。</p>
          </div>
        </Section>

        <Section title="アイテム" step={7}>
          <div className="p-4 bg-teal-50 border-l-4 border-teal-400 rounded">
            <p className="text-gray-700">価格２０点分のアイテムを購入する。</p>
          </div>
        </Section>

        <Section title="最終計算" step={8}>
          <div className="space-y-3">
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="font-semibold text-indigo-800">HP・SP算出:</span>
              <span className="text-gray-700 ml-2">
                選択した二つのクラスのＨＰ・ＳＰの数値をそれぞれ合計し、ヒーロースキルなどで修正がある場合はそれを加える。
              </span>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="font-semibold text-indigo-800">行動値決定:</span>
              <span className="text-gray-700 ml-2">
                行動値の算出を行う。行動値は【反射】×２＋【知力】となる。ヒーロースキルなどで修正がある場合はそれを加える。
              </span>
            </div>
          </div>
        </Section>
      </div>

      <nav className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Link
            to="/rules"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← ルール一覧に戻る
          </Link>
          {/* <Link
            to="/character"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            キャラクター作成ツールへ →
          </Link> */}
        </div>
      </nav>
    </article>
  );
};
