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
        type: '白兵',
        skill: '〈パワー〉',
        modifier: '０％',
        attackPower: '０',
        guardValue: '０',
        range: '至近',
        price: 0,
        effect: '武器が何も装備されていない場合、この武器が装備されているものとして扱う。',
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

  const armor = [
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

  const consumables = [
    {
      name: 'ソーマ',
      icon: GiHealthPotion,
      details: {
        type: '消耗品',
        price: 4,
        effect: 'マイナーアクション、メジャーアクションで使用可能。ＨＰを２Ｄ点回復する。',
      } as ItemDetails,
    },
    {
      name: 'スキルサプライ',
      icon: GiMedicines,
      details: {
        type: '消耗品',
        price: 6,
        effect: 'マイナーアクション、メジャーアクションで使用可能。ＳＰを２Ｄ点回復する。',
      } as ItemDetails,
    },
    {
      name: '嗜好品',
      icon: GiCoffeeCup,
      details: {
        type: '消耗品',
        price: 2,
        effect: 'マイナーアクション、メジャーアクションで使用可能。ＳＰを５点回復する。',
      } as ItemDetails,
    },
  ];

  const otherItems = [
    {
      name: 'お気に入りの店',
      icon: GiShop,
      details: {
        type: 'その他',
        price: 8,
        effect: 'ミドルパートでのみ使用可能。シーンの舞台を変更し、そのシーンの終了時に登場していたＰＣ全員はＨＰかＭＰを１Ｄ点回復する。ＧＭは状況に応じてこのアイテムの使用を拒否してもよいが、その場合このアイテムの使用回数には数えない。１シナリオで３回まで使用可能。',
      } as ItemDetails,
    },
    {
      name: 'コネクション：ヒーロー協会',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        price: 2,
        effect: 'ミドルパートの情報収集で使用可能。〈社会：ヒーロー協会〉を使用した判定の判定値に＋１０％する。',
      } as ItemDetails,
    },
    {
      name: 'コネクション：企業',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        price: 2,
        effect: 'ミドルパートの情報収集で使用可能。〈社会：企業〉を使用した判定の判定値に＋１０％する。',
      } as ItemDetails,
    },
    {
      name: 'コネクション：警察機構',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        price: 2,
        effect: 'ミドルパートの情報収集で使用可能。〈社会：警察〉を使用した判定の判定値に＋１０％する。',
      } as ItemDetails,
    },
    {
      name: 'コネクション：情報屋',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        price: 2,
        effect: 'ミドルパートの情報収集で使用可能。〈社会：裏社会〉を使用した判定の判定値に＋１０％する。',
      } as ItemDetails,
    },
    {
      name: 'コネクション：学校関係者',
      icon: FaRegHandshake,
      details: {
        type: 'その他',
        price: 2,
        effect: 'ミドルパートの情報収集で使用可能。〈社会：スクール〉を使用した判定の判定値に＋１０％する。',
      } as ItemDetails,
    },
    {
      name: 'バディ',
      icon: GiPerson,
      details: {
        type: 'その他',
        price: 2,
        effect: 'ミドルパートの情報収集で使用可能。〈社会：○○〉を使用した判定の判定値に＋１０％する。１シナリオに１回使用可能。',
      } as ItemDetails,
    },
  ];

  const technologyItems = [
    {
      name: 'パワードスーツ',
      icon: GiMechanicalArm,
      details: {
        type: '防具',
        dodge: '＋０％',
        actionValue: '＋０',
        protection: '１０',
        price: 0,
        effect: '装備中、素手のダメージを＋５し、〈パワー〉判定を〈操縦〉で代用してもよい。',
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
        effect: '白兵攻撃を行う際は左側のデータを、射撃攻撃を行う際は右側のデータを使用する。射撃攻撃は至近距離不可。',
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
        effect: '至近距離、近距離への使用不可。この武器での攻撃の対象は範囲になり、ダメージ算出時防護点を無視する。シーンに１回使用可能。',
      } as ItemDetails,
    },
    {
      name: '加速装置',
      icon: GiMechanicalArm,
      details: {
        type: '消耗品',
        price: 0,
        effect: 'スタートプロセスに使用し、そのラウンド中の行動値＋１０。シーンに１回使用可能。',
      } as ItemDetails,
    },
    {
      name: 'サポートＡＩ',
      icon: GiMechanicalArm,
      details: {
        type: 'その他',
        price: 0,
        effect: '自分が何らかの判定を行った直後に使用する。その判定を振り直す。シナリオに３回使用可能。',
      } as ItemDetails,
    },
    {
      name: 'ロケットブースター',
      icon: GiMechanicalArm,
      details: {
        type: 'その他',
        price: 0,
        effect: 'ムーブアクションに使用し、二段回移動を行う。この移動では移動妨害されない。',
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
