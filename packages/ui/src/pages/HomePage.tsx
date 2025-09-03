import React from 'react';

export const HomePage: React.FC = () => (
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 break-words">Age of Hero TRPG へようこそ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">ルール</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">ゲームの基本的なルールとシステムについて学べます。</p>
            <a href="/rules" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto text-center">
              ルールを見る
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-600">ワールド</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Age of Heroの世界観と設定について詳しく知ることができます。</p>
            <a href="/world" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm sm:text-base w-full sm:w-auto text-center">
              ワールドを見る
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-600">キャラクター作成</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">あなた独自のヒーローキャラクターを作成するためのガイドです。</p>
            <a href="/character" className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-sm sm:text-base w-full sm:w-auto text-center">
              キャラクター作成
            </a>
          </div>
        </div>
      </div>
  );