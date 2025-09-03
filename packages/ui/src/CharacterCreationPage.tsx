import React from 'react';
import { Layout } from './Layout';

export const CharacterCreationPage: React.FC = () => {
  const classes = [
    { name: 'マッスル', color: 'bg-red-100 text-red-800 border-red-300' },
    { name: 'テクノロジー', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { name: 'マジカル', color: 'bg-purple-100 text-purple-800 border-purple-300' },
    { name: 'サイキック', color: 'bg-pink-100 text-pink-800 border-pink-300' },
    { name: 'バイオ', color: 'bg-green-100 text-green-800 border-green-300' },
    { name: 'エスペラント', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    { name: 'アーティファクト', color: 'bg-orange-100 text-orange-800 border-orange-300' },
    { name: 'アーツ', color: 'bg-teal-100 text-teal-800 border-teal-300' }
  ];

  const abilities = [
    {
      category: '肉体（Physical）',
      skills: ['パワー（Power）', 'タフネス（Toughness）', 'スタミナ（Stamina）'],
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      category: '反射（Reflexes）',
      skills: ['テクニック（Technique）', 'ムーブメント（Movement）', 'パイロット（Piloting）'],
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      category: '感覚（Senses）',
      skills: ['射撃（Shooting）', '知覚（Perception）', '工芸（Crafting）', '芸術（Arts）'],
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      category: '知識（Intelligence）',
      skills: ['情報（Information）', '交渉（Negotiation）', '心理（Psychology）', '医療（Medical）'],
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      category: '超常（Supernatural）',
      skills: ['魔法（Magic）', 'サイキック（Psychic Powers）', '第六感（Sixth Sense）'],
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  const steps = [
    { number: 1, title: 'クラスを2つ選択', description: '8種類のクラスから好きな組み合わせを選択' },
    { number: 2, title: '基本能力値を計算', description: '選択したクラスに基づいて初期値を設定' },
    { number: 3, title: '追加の技能ポイント150%を分配', description: 'キャラクターの個性を表現する能力値の調整' },
    { number: 4, title: 'ヒーロースキル7レベルを習得', description: 'クラスに応じた特殊能力を選択' },
    { number: 5, title: '必殺技1レベルを習得', description: 'キャラクター独自の強力な技を作成' },
    { number: 6, title: 'アイテム20点分を購入', description: '装備や道具でキャラクターを強化' },
    { number: 7, title: 'HP・SPを算出', description: '生命力とスキルポイントの計算' },
    { number: 8, title: '行動値を決定', description: '戦闘時の行動順序を決める値を算出' }
  ];

  return (
    <Layout title="キャラクター作成 - Age of Hero TRPG">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">キャラクター作成</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            「Age of Hero」の世界で活躍するヒーローキャラクターを作成します。
            キャラクターは数値的なデータ、ヒーロースキル、アイテム、個人的背景によって定義されます。
          </p>
        </header>

        <div className="space-y-12">
          {/* 作成手順 */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">📋</span>
              作成手順
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* クラス選択 */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              クラス選択
            </h2>
            <p className="text-gray-600 mb-6">8種類のクラスから2つを選択できます。それぞれ異なる特徴と能力を持っています。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {classes.map((classItem) => (
                <div key={classItem.name} className={`p-3 sm:p-4 rounded-lg border-2 ${classItem.color} text-center font-medium hover:scale-105 transition-transform cursor-pointer`}>
                  {classItem.name}
                </div>
              ))}
            </div>
          </section>

          {/* 能力値 */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              能力値（5つのカテゴリー）
            </h2>
            <div className="grid gap-6">
              {abilities.map((ability) => (
                <div key={ability.category} className={`p-4 sm:p-6 rounded-lg border-2 ${ability.bgColor} ${ability.borderColor}`}>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${ability.color}`}>{ability.category}</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {ability.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${ability.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 共通スキル */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              共通スキル
            </h2>
            <p className="text-gray-600 mb-4">全てのキャラクターが持つ基本的なスキルです。</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {['社会（Social）', '人脈（Connections）', '意志力（Willpower）'].map((skill) => (
                <div key={skill} className="p-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg text-center">
                  <span className="text-yellow-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 残りのセクション */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              技能ポイント分配
            </h2>
            <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
              <p className="text-gray-700">追加で150%分の技能ポイントを上記の能力値に分配します。これによりキャラクターの個性や特徴を表現できます。</p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
              ヒーロースキル
            </h2>
            <div className="p-4 bg-pink-50 border-l-4 border-pink-400 rounded">
              <p className="text-gray-700">合計7レベルまでのヒーロースキルを習得できます。選択したクラスによって習得可能なスキルが決まります。</p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
              必殺技
            </h2>
            <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
              <p className="text-gray-700">1レベルの必殺技を習得します。これはキャラクターの特別な能力を表現します。</p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
              アイテム
            </h2>
            <div className="p-4 bg-teal-50 border-l-4 border-teal-400 rounded">
              <p className="text-gray-700">20点分のアイテムを購入できます。装備や道具を選択してキャラクターを強化しましょう。</p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
              最終計算
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                <span className="font-semibold text-indigo-800">HP・SP算出:</span>
                <span className="text-gray-700 ml-2">キャラクターの生命力とスキルポイントを計算します。</span>
              </div>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                <span className="font-semibold text-indigo-800">行動値決定:</span>
                <span className="text-gray-700 ml-2">戦闘時の行動順序を決める値を算出します。</span>
              </div>
            </div>
          </section>
        </div>

        {/* ナビゲーション */}
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <a href="/rules" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              ← ルール一覧に戻る
            </a>
            <a href="/character" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              キャラクター作成ツールへ →
            </a>
          </div>
        </nav>
      </article>
    </Layout>
  );
};