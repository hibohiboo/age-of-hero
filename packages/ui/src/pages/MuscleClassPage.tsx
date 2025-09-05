import React from 'react';
import {
  GiMuscleUp,
  GiRunningShoe,
  GiShield,
  GiFist,
  GiBiceps,
  GiEyeball,
  GiBrain,
  GiMagicPalm,
} from 'react-icons/gi';
import { MdOutlineBolt } from 'react-icons/md';
import { Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SkillCard, SkillDetails } from '../components/SkillCard';

export const MuscleClassPage: React.FC = () => {
  const abilityStats = [
    { name: '肉体', value: 3, icon: GiBiceps, color: 'bg-red-100' },
    { name: '反射', value: 2, icon: MdOutlineBolt, color: 'bg-yellow-100' },
    { name: '感覚', value: 2, icon: GiEyeball, color: 'bg-blue-100' },
    { name: '知力', value: 1, icon: GiBrain, color: 'bg-purple-100' },
    { name: '超常', value: 0, icon: GiMagicPalm, color: 'bg-gray-100' },
  ];

  const hpSp = [
    { name: 'ＨＰ', value: 38, color: 'bg-red-100' },
    { name: 'ＳＰ', value: 17, color: 'bg-blue-100' },
  ];

  const classSkills = [
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
      } as SkillDetails,
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
      } as SkillDetails,
      color: 'bg-orange-50 border-orange-200',
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
      } as SkillDetails,
      color: 'bg-green-50 border-green-200',
    },
  ];

  const characteristics = [
    {
      title: '近接戦闘の専門家',
      icon: GiFist,
      description: '腕力とスピードを生かした近接戦闘では他を圧倒する力を見せる',
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
  ];

  const origins = [
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
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <PageHeader
        title="マッスル"
        description="強靭な肉体を駆使して戦うヒーローたち。単純なパワーに限らず、脚力の強化によるスピードアップや身体機能の上昇による防御なども行える。"
        centered
      />

      <div className="space-y-12">
        <Section title="クラスの特徴" icon="💪">
          <div className="space-y-4 mb-6">
            <p className="text-gray-600">
              強靭な肉体を駆使して戦うヒーローたちだ。単純なパワーに限らず、脚力の強化によるスピードアップや身体機能の上昇による防御なども行える。腕力とスピードを生かした近接戦闘では他を圧倒する力を見せるだろう。
            </p>
            <p className="text-gray-600">
              また、事件や救助の場面などでは最前線に立ち、その身を使って困難に立ち向かう姿は、一般市民からは最も近く感じる等身大のヒーローとして受け止められることが多い。
            </p>
            <p className="text-gray-600">
              その身体は生まれ持っての恵まれた体かもしれないし、後天的に改造を受けたのかもしれない。あるいは、ひたすらに積んだ鍛錬による可能性もある。いずれにせよ、その肉体はもはや超常の域にあるのだ。
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
            {characteristics.map((char, index) => (
              <div
                key={index}
                className={`p-4 ${char.color} rounded-lg border-2`}
              >
                <div className="flex items-start gap-3">
                  <char.icon
                    size={24}
                    className="text-gray-700 mt-1 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {char.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{char.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="能力値" icon="📊">
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-4">
              {abilityStats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 ${stat.color} rounded-lg border border-gray-200 text-center`}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon size={24} className="text-gray-700" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {stat.name}
                  </h4>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {hpSp.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 ${stat.color} rounded-lg border border-gray-200 text-center`}
                >
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {stat.name}
                  </h4>
                  <div className="text-3xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-yellow-800 text-sm">
                <strong>能力値の特徴：</strong>
                <br />
                マッスルは肉体能力に特化したクラス。最高の肉体能力値（3）を持ち、反射と感覚も平均的な値を保つ。知力は低めで、超常能力は持たない物理特化型のヒーローである。
              </p>
            </div>
          </div>
        </Section>

        <Section title="クラス固有スキル" icon="⚡">
          <p className="text-gray-600 mb-6">
            マッスルクラスが習得できる専用のヒーロースキル。
          </p>

          <div className="space-y-6">
            {classSkills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                icon={skill.icon}
                details={skill.details}
                color={skill.color}
              />
            ))}
          </div>
        </Section>

        <Section title="マッスルの起源" icon="🔬">
          <p className="text-gray-600 mb-6">
            マッスルの超常的な肉体がどのようにして得られたかは様々である。キャラクター作成時に、自分のマッスルがどのような経緯で力を得たのかを考えてみよう。
          </p>

          <div className="space-y-4">
            {origins.map((origin, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {origin.title}
                </h4>
                <p className="text-gray-600 text-sm">{origin.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-blue-800 text-sm">
              <strong>重要：</strong>
              <br />
              いずれの起源であっても、その肉体はもはや超常の域にある。普通の人間では到底不可能な身体能力を発揮することができる存在なのだ。
            </p>
          </div>
        </Section>

        <Section title="プレイスタイル" icon="🎯">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
              <h4 className="font-semibold text-green-800 mb-3">
                戦闘での役割
              </h4>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• 前衛アタッカーとして敵に接近し、高い攻撃力で敵を撃破</li>
                <li>• 《パワードライブ》による強力なコンボ攻撃</li>
                <li>• 《マッスルチャージ》で各種判定を強化</li>
                <li>• 《バイタルアップ》による高いHP量で壁役も可能</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
              <h4 className="font-semibold text-orange-800 mb-3">
                救助・探索での活躍
              </h4>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• がれきの除去や重量物の運搬</li>
                <li>• 危険な場所への突入と人命救助</li>
                <li>• 物理的な障害の突破</li>
                <li>• 一般市民に安心感を与える存在</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>

      <nav className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Link
            to="/character-creation"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← キャラクター作成に戻る
          </Link>
          <Link
            to="/rules/hero-skill"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ヒーロースキルへ →
          </Link>
        </div>
      </nav>
    </article>
  );
};
