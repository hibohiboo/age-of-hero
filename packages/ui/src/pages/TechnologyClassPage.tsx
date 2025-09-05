import React from 'react';
import {
  GiRobotGrab,
  GiMechaHead,
  GiRayGun,
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

export const TechnologyClassPage: React.FC = () => {
  const abilityStats = [
    { name: '肉体', value: 1, icon: GiBiceps, color: 'bg-red-100' },
    { name: '反射', value: 2, icon: MdOutlineBolt, color: 'bg-yellow-100' },
    { name: '感覚', value: 3, icon: GiEyeball, color: 'bg-blue-100' },
    { name: '知力', value: 2, icon: GiBrain, color: 'bg-purple-100' },
    { name: '超常', value: 0, icon: GiMagicPalm, color: 'bg-gray-100' },
  ];

  const hpSp = [
    { name: 'ＨＰ', value: 30, color: 'bg-red-100' },
    { name: 'ＳＰ', value: 25, color: 'bg-blue-100' },
  ];

  const classSkills = [
    {
      name: '《スペシャルツール》',
      icon: GiMechaHead,
      details: {
        maxLv: 5,
        timing: '常時',
        skill: 'なし',
        target: '自身',
        range: 'なし',
        cost: 'なし',
        effect:
          'テクノロジー専用アイテムを１つ取得する。このヒーロースキルのＬｖが３以上になったならば追加で１つ、Ｌｖが５以上になったならば更に追加で１つ取得する',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《アイテムボックス》',
      icon: GiMechaHead,
      details: {
        maxLv: 5,
        timing: 'メジャーアクション',
        skill: '〈製作〉',
        target: '装備ひとつ',
        range: '至近',
        cost: 6,
        effect:
          '装備ひとつを対象に〈製作〉技能での判定を行う。判定に成功したならば、対象の「攻撃力」「防護点」「ガード値」「修正」の内のひとつを＋[Ｌｖ＋１]する。同じ装備品の同じデータに対しては効果は重複しない。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《ツールファイト》',
      icon: GiRayGun,
      details: {
        maxLv: 5,
        timing: 'メジャーアクション',
        skill: '〈操縦〉〈射撃〉',
        target: '単体',
        range: '武器',
        cost: 4,
        effect:
          'このヒーロースキルを組み合わせた〈操縦〉〈射撃〉技能の判定値を＋[（Ｌｖ×１０）＋１０]％する。攻撃に組み合わせて使用した場合、コンボ２として扱う。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《バリア発生装置》',
      icon: GiRobotGrab,
      details: {
        maxLv: 5,
        timing: 'オート',
        skill: 'なし',
        target: '単体',
        range: '近距離',
        cost: 4,
        effect:
          'ダメージロールの直後に使用する。対象が受けるダメージを[Ｌｖ×２]＋２Ｄ軽減する。ラウンドに１回使用可能。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《研究費用》',
      icon: GiBrain,
      details: {
        maxLv: 10,
        timing: '常時',
        skill: 'なし',
        target: '自身',
        range: 'なし',
        cost: 'なし',
        effect: 'あなたは常備化点をＬｖ×５点追加で取得する。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《デポジッション》',
      icon: GiMechaHead,
      details: {
        maxLv: 1,
        timing: '行動値チェック',
        skill: 'なし',
        target: '自身',
        range: 'なし',
        cost: 3,
        effect:
          'あなたの装備しているアイテムひとつを装備から外し、あなたの所持していることなるアイテムひとつを即座に装備する。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《リアクターパルス》',
      icon: GiMechaHead,
      details: {
        maxLv: 3,
        timing: 'オート',
        skill: 'なし',
        target: '単体',
        range: '中',
        cost: 4,
        effect:
          '対象が何らかの判定を行う直前に使用する。対象の判定値を－[Ｌｖ×１０]％する。ラウンドに１回使用可能。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《エネルギーレイ》',
      icon: GiRayGun,
      details: {
        maxLv: 3,
        timing: 'マイナー',
        skill: 'なし',
        target: '自身',
        range: 'なし',
        cost: 6,
        effect:
          'あなたがそのメインプロセス中に行う攻撃ではダメージを＋[Ｌｖ×３]し、防護点を無視してダメージを算出する。シーンにＬｖ回使用可能。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《バラージショット》',
      icon: GiRayGun,
      details: {
        maxLv: 5,
        timing: 'メジャーアクション',
        skill: '〈射撃〉',
        target: '範囲（選択）',
        range: '武器',
        cost: 7,
        effect:
          'このヒーロースキルを組み合わせた攻撃の対象を範囲（選択）に変更する。また、この攻撃のダメージに[Ｌｖ＋５]する。シーンに１回使用可能。このヒーロースキルのＬｖが３以上になったならばシーンに２回、Ｌｖが５以上になったならばシーンに３回使用可能。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      name: '《リミッター解除》',
      icon: GiMechaHead,
      details: {
        maxLv: 3,
        timing: 'セットアップ',
        skill: 'なし',
        target: '効果参照',
        range: '至近',
        cost: 'ＦＣ',
        effect:
          'あなたが装備しているアイテムひとつを対象とする。ファンチットを任意の枚数消費し、対象の「攻撃力」「防護点」「ガード値」「行動値」「修正」のうち[消費したＦＣ]個に＋[（Ｌｖ×３）＋２]する。判定値への修正については＋[Ｌｖ×５]％する。シナリオに１回使用可能。',
      } as SkillDetails,
      color: 'bg-cyan-50 border-cyan-200',
    },
  ];

  const characteristics = [
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
  ];

  const origins = [
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
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <PageHeader
        title="テクノロジー"
        description="最先端技術の申し子たるヒーローたち。新技術の粋を集めたパワードスーツや、自ら開発したアイデア兵器などを使用して戦闘や救助を行う。"
        centered
      />

      <div className="space-y-12">
        <Section title="クラスの特徴" icon="⚙️">
          <div className="space-y-4 mb-6">
            <p className="text-gray-600">
              最先端技術の申し子たるヒーローたちだ。新技術の粋を集めたパワードスーツや、自ら開発したアイデア兵器などを使用して戦闘や救助を行う。アイテムに頼りがちのように思われることもあるが、彼らは普通では扱えないような特殊な機構を持つアイテムを最も効果的に扱えるヒーローなのだ。
            </p>
            <p className="text-gray-600">
              身に付けるアイテムは企業や組織から与えられたものや、自らの手で開発したもの、果ては未来の不可思議な技術で作られたものであったりと様々だ。しかし、それらは一様に強力で、持ち主であるヒーローのみが扱えるのである。
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
                テクノロジーは感覚能力（3）に特化し、知力・反射も平均的な値を持つ技術特化型クラス。肉体は低く、超常能力は持たないが、アイテムによって多様な能力を発揮できる。
              </p>
            </div>
          </div>
        </Section>

        <Section title="クラス固有スキル" icon="⚡">
          <p className="text-gray-600 mb-6">
            テクノロジークラスが習得できる専用のヒーロースキル。
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

        <Section title="テクノロジーの起源" icon="🔬">
          <p className="text-gray-600 mb-6">
            テクノロジーヒーローの装備がどのようにして得られたかは様々である。キャラクター作成時に、自分のテクノロジーヒーローがどのような経緯で装備を得たのかを考えてみよう。
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
              いずれの起源であっても、それらの装備は一様に強力で、持ち主であるヒーローのみが扱える特別な存在なのだ。
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
                <li>• 《ツールファイト》による射撃・操縦攻撃の強化</li>
                <li>• 《バラージショット》による範囲攻撃</li>
                <li>• 《エネルギーレイ》で防護点を無視した攻撃</li>
                <li>• 《バリア発生装置》による味方の防護</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
              <h4 className="font-semibold text-orange-800 mb-3">
                アイテム活用
              </h4>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• 《スペシャルツール》でテクノロジー専用アイテム取得</li>
                <li>• 《アイテムボックス》で装備の性能強化</li>
                <li>• 《研究費用》で豊富な常備化点を活用</li>
                <li>• 《デポジッション》による状況に応じた装備変更</li>
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
