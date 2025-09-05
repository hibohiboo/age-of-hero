import React from 'react';
import { FaRegHandshake } from 'react-icons/fa6';
import {
  GiFist,
  GiBoxingGlove,
  GiButterflyKnife,
  GiRifle,
  GiShield,
  GiClothes,
  GiChestArmor,
  GiHealthPotion,
  GiMedicines,
  GiCoffeeCup,
  GiPerson,
  GiShop,
  GiMechanicalArm,
  GiRelicBlade,
  GiGladius,
} from 'react-icons/gi';
import { ItemCard, ItemDetails } from '../components/ItemCard';

export const ItemsPage: React.FC = () => {
  const weapons = [
    {
      name: '素手',
      icon: GiFist,
      details: {
        type: '白兵武器',
        skill: '〈パワー〉',
        modifier: '0%',
        attackPower: '+0',
        guardValue: '2',
        range: '至近',
        price: '－',
        effect: '－',
      } as ItemDetails,
    },
    {
      name: '格闘武器',
      icon: GiBoxingGlove,
      details: {
        type: '白兵武器',
        skill: '〈パワー〉',
        modifier: '0%',
        attackPower: '+2',
        guardValue: '2',
        range: '至近',
        price: '30万',
        effect: 'メリケンサック、ナックルダスターなど。',
      } as ItemDetails,
    },
    {
      name: '片手白兵武器（小）',
      icon: GiButterflyKnife,
      details: {
        type: '白兵武器',
        skill: '〈技術〉',
        modifier: '+20%',
        attackPower: '+4',
        guardValue: '3',
        range: '至近',
        price: '50万',
        effect: 'ナイフ、短剣など。',
      } as ItemDetails,
    },
    {
      name: '片手白兵武器（中）',
      icon: GiGladius,
      details: {
        type: '白兵武器',
        skill: '〈技術〉',
        modifier: '0%',
        attackPower: '+6',
        guardValue: '4',
        range: '至近',
        price: '80万',
        effect: '剣、棍棒、斧など。',
      } as ItemDetails,
    },
    {
      name: '両手白兵武器',
      icon: GiRelicBlade,
      details: {
        type: '白兵武器',
        skill: '〈技術〉',
        modifier: '-10%',
        attackPower: '+9',
        guardValue: '5',
        range: '至近',
        price: '120万',
        effect: '大剣、大斧、槍など。',
      } as ItemDetails,
    },
    {
      name: '射撃武器（小）',
      icon: GiRifle,
      details: {
        type: '射撃武器',
        skill: '〈射撃〉',
        modifier: '+20%',
        attackPower: '+4',
        guardValue: '2',
        range: '近距離',
        price: '60万',
        effect: '拳銃など。',
      } as ItemDetails,
    },
    {
      name: '射撃武器（中）',
      icon: GiRifle,
      details: {
        type: '射撃武器',
        skill: '〈射撃〉',
        modifier: '0%',
        attackPower: '+6',
        guardValue: '3',
        range: '中距離',
        price: '100万',
        effect: 'ライフル、ショットガンなど。',
      } as ItemDetails,
    },
    {
      name: '射撃武器（大）',
      icon: GiRifle,
      details: {
        type: '射撃武器',
        skill: '〈射撃〉',
        modifier: '-10%',
        attackPower: '+9',
        guardValue: '4',
        range: '遠距離',
        price: '150万',
        effect: 'バズーカ、重機関銃など。',
      } as ItemDetails,
    },
    {
      name: 'シールド（小）',
      icon: GiShield,
      details: {
        type: 'シールド',
        skill: '〈技術〉',
        modifier: '+10%',
        attackPower: '+1',
        guardValue: '6',
        range: '至近',
        price: '40万',
        effect: '小盾など。',
      } as ItemDetails,
    },
    {
      name: 'シールド（大）',
      icon: GiShield,
      details: {
        type: 'シールド',
        skill: '〈技術〉',
        modifier: '-10%',
        attackPower: '+2',
        guardValue: '8',
        range: '至近',
        price: '80万',
        effect: '大盾など。',
      } as ItemDetails,
    },
  ];

  const armor = [
    {
      name: 'コスチューム（軽）',
      icon: GiClothes,
      details: {
        type: '防具',
        skill: '－',
        modifier: '0%',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '10万',
        effect: '防護点1。ヒーロースーツなど。',
      } as ItemDetails,
    },
    {
      name: 'コスチューム（重）',
      icon: GiClothes,
      details: {
        type: '防具',
        skill: '－',
        modifier: '0%',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '50万',
        effect: '防護点3。強化ヒーロースーツなど。',
      } as ItemDetails,
    },
    {
      name: 'アーマー（軽）',
      icon: GiChestArmor,
      details: {
        type: '防具',
        skill: '－',
        modifier: '-10%',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '80万',
        effect: '防護点5。軽装甲など。〈運動〉-10%',
      } as ItemDetails,
    },
    {
      name: 'アーマー（重）',
      icon: GiChestArmor,
      details: {
        type: '防具',
        skill: '－',
        modifier: '-20%',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '150万',
        effect: '防護点8。重装甲など。〈運動〉-20%',
      } as ItemDetails,
    },
    {
      name: 'サイコスーツ',
      icon: GiChestArmor,
      details: {
        type: '防具（サイキック専用）',
        skill: '－',
        modifier: '0%',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '100万',
        effect:
          '防護点2。サイキックのヒーロースキルのコストを-1（最低1）する。',
      } as ItemDetails,
    },
  ];

  const consumables = [
    {
      name: 'ソーマ',
      icon: GiHealthPotion,
      details: {
        type: '消耗品',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '5万/個',
        effect: 'HPを10点回復する。',
      } as ItemDetails,
    },
    {
      name: 'スキルサプライ',
      icon: GiMedicines,
      details: {
        type: '消耗品',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '3万/個',
        effect: 'SPを5点回復する。',
      } as ItemDetails,
    },
    {
      name: '嗜好品',
      icon: GiCoffeeCup,
      details: {
        type: '消耗品',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '1万/個',
        effect: 'ファンチットを1枚獲得する。1シーンに1回まで。',
      } as ItemDetails,
    },
  ];

  const otherItems = [
    {
      name: 'コネクション（政府）',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '100万',
        effect: '政府関係者とのコネクション。情報収集や支援要請が可能。',
      } as ItemDetails,
    },
    {
      name: 'コネクション（組織）',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '80万',
        effect: 'ヒーロー組織とのコネクション。情報や装備の提供が可能。',
      } as ItemDetails,
    },
    {
      name: 'コネクション（民間）',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '50万',
        effect: '民間人とのコネクション。日常的な支援や情報収集が可能。',
      } as ItemDetails,
    },
    {
      name: 'バディ',
      icon: GiPerson,
      details: {
        type: 'その他',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '150万',
        effect: '相棒となるキャラクター。戦闘や調査で支援してくれる。',
      } as ItemDetails,
    },
    {
      name: 'お気に入りの店',
      icon: GiShop,
      details: {
        type: 'その他',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '30万',
        effect: 'よく利用する店舗。アイテムを安く購入できる。',
      } as ItemDetails,
    },
  ];

  const technologyItems = [
    {
      name: 'サイバーウェア',
      icon: GiMechanicalArm,
      details: {
        type: 'テクノロジー専用',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '200万',
        effect: 'サイバネティック強化。能力値を1つ選んで+1する。',
      } as ItemDetails,
    },
    {
      name: 'ドローン',
      icon: GiMechanicalArm,
      details: {
        type: 'テクノロジー専用',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '120万',
        effect: '自動操縦ドローン。偵察や簡単な作業を代行できる。',
      } as ItemDetails,
    },
    {
      name: 'ハッキングツール',
      icon: GiMechanicalArm,
      details: {
        type: 'テクノロジー専用',
        skill: '－',
        modifier: '－',
        attackPower: '－',
        guardValue: '－',
        range: '－',
        price: '80万',
        effect: '電子機器への侵入ツール。〈情報〉判定に+20%のボーナス。',
      } as ItemDetails,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            アイテム一覧
          </h1>
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
};
