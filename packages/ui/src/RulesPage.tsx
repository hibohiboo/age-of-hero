import React from 'react';

export const RulesPage: React.FC = () => {
  const rulesSections = [
    { title: 'キャラクター作成', path: '/rules/character-creation' },
    { title: '判定ルール', path: '/rules/judgment' },
    { title: 'セッションの進行', path: '/rules/session' },
    { title: '喝采ルール', path: '/rules/applause' },
    { title: '戦闘ルール', path: '/rules/combat' },
    { title: '戦闘ルール：バッドステータス', path: '/rules/combat-bad-status' },
  ];

  return (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">ルール</h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Age of Hero TRPGの基本的なルールとシステムについて説明します。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {rulesSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{section.title}</h3>
              <a 
                href={section.path} 
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                詳細を見る →
              </a>
            </div>
          ))}
        </div>
    </div>
  );
};