import React from 'react';

import { ItemCard } from '../components/ItemCard';
import {
  weapons,
  armor,
  consumables,
  otherItems,
  technologyItems,
} from '../constants/gameData';

export const ItemsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">アイテム一覧</h1>
        <p className="text-lg text-gray-600">
          Age of Hero TRPGで使用できるアイテムの詳細情報
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 pb-2">
          武器
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {weapons.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              icon={item.icon}
              details={item.details}
              color="bg-red-50 border-red-200"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
          防具
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {armor.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              icon={item.icon}
              details={item.details}
              color="bg-blue-50 border-blue-200"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 pb-2">
          消耗品
        </h2>
        <p className="mb-4 text-gray-600">
          「種別：消耗品」のアイテムは装備欄に関係なく複数個購入することができる。これらのアイテムは、ひとつにつき１シナリオで１回使用できる。
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          {consumables.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              icon={item.icon}
              details={item.details}
              color="bg-green-50 border-green-200"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 pb-2">
          その他のアイテム
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {otherItems.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              icon={item.icon}
              details={item.details}
              color="bg-purple-50 border-purple-200"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-orange-500 pb-2">
          テクノロジー専用アイテム
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {technologyItems.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              icon={item.icon}
              details={item.details}
              color="bg-orange-50 border-orange-200"
            />
          ))}
        </div>
      </section>
    </div>
  </div>
);
