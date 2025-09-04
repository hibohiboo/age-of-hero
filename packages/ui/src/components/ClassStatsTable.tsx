import React from 'react';

interface ClassStat {
  name: string;
  body: number;
  reflex: number;
  sense: number;
  intellect: number;
  supernatural: number;
  hp: number;
  sp: number;
}

const classStats: ClassStat[] = [
  {
    name: 'マッスル',
    body: 3,
    reflex: 2,
    sense: 2,
    intellect: 1,
    supernatural: 0,
    hp: 38,
    sp: 17,
  },
  {
    name: 'テクノロジー',
    body: 1,
    reflex: 2,
    sense: 3,
    intellect: 2,
    supernatural: 0,
    hp: 30,
    sp: 25,
  },
  {
    name: 'マジカル',
    body: 1,
    reflex: 1,
    sense: 1,
    intellect: 2,
    supernatural: 3,
    hp: 23,
    sp: 32,
  },
  {
    name: 'サイキック',
    body: 1,
    reflex: 1,
    sense: 2,
    intellect: 2,
    supernatural: 2,
    hp: 25,
    sp: 30,
  },
  {
    name: 'バイオ',
    body: 2,
    reflex: 2,
    sense: 2,
    intellect: 2,
    supernatural: 0,
    hp: 36,
    sp: 19,
  },
  {
    name: 'エスペラント',
    body: 1,
    reflex: 2,
    sense: 1,
    intellect: 2,
    supernatural: 2,
    hp: 27,
    sp: 28,
  },
  {
    name: 'アーティファクト',
    body: 2,
    reflex: 1,
    sense: 2,
    intellect: 1,
    supernatural: 2,
    hp: 34,
    sp: 21,
  },
  {
    name: 'アーツ',
    body: 1,
    reflex: 3,
    sense: 2,
    intellect: 2,
    supernatural: 0,
    hp: 32,
    sp: 23,
  },
];

export const ClassStatsTable: React.FC = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            クラス名
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            肉体
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            反射
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            感覚
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            知力
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            超常
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            ＨＰ
          </th>
          <th className="px-3 py-2 border border-gray-300 font-semibold text-gray-700">
            ＳＰ
          </th>
        </tr>
      </thead>
      <tbody>
        {classStats.map((classStat) => (
          <tr key={classStat.name} className="hover:bg-gray-50">
            <td className="px-3 py-2 border border-gray-300 font-medium">
              {classStat.name}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.body}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.reflex}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.sense}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.intellect}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.supernatural}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.hp}
            </td>
            <td className="px-3 py-2 border border-gray-300 text-center">
              {classStat.sp}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
