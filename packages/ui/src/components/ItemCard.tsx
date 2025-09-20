import React from 'react';
import { IconType } from 'react-icons';

export interface ItemDetails {
  type: string;
  skill?: string;
  modifier?: string;
  attackPower?: number | string;
  guardValue?: number | string;
  range?: string;
  dodge?: string; // 防具用
  actionValue?: string; // 防具用
  protection?: number | string; // 防具用 - 防護点
  price: number | string;
  effect?: string;
}

export interface ItemCardProps {
  name: string;
  icon: IconType;
  details: ItemDetails;
  color?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  name,
  icon: Icon,
  details,
  color = 'bg-gray-50 border-gray-200',
}) => (
  <div className={`p-6 ${color} rounded-lg border-2`}>
    <div className="flex items-center gap-3 mb-4">
      <Icon size={28} className="text-gray-700" />
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    </div>

    <div className="space-y-3">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-white rounded border border-gray-200">
          <span className="text-sm font-medium text-gray-600">種別：</span>
          <span className="text-sm text-gray-800">{details.type}</span>
        </div>
        {details.skill && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">技能：</span>
            <span className="text-sm text-gray-800">{details.skill}</span>
          </div>
        )}
        {details.modifier && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">修正：</span>
            <span className="text-sm text-gray-800">{details.modifier}</span>
          </div>
        )}
        {details.attackPower && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">攻撃力：</span>
            <span className="text-sm text-gray-800">{details.attackPower}</span>
          </div>
        )}
        {details.guardValue && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">
              ガード値：
            </span>
            <span className="text-sm text-gray-800">{details.guardValue}</span>
          </div>
        )}
        {details.range && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">射程：</span>
            <span className="text-sm text-gray-800">{details.range}</span>
          </div>
        )}
        {details.dodge && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">ドッジ：</span>
            <span className="text-sm text-gray-800">{details.dodge}</span>
          </div>
        )}
        {details.actionValue && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">行動値：</span>
            <span className="text-sm text-gray-800">{details.actionValue}</span>
          </div>
        )}
        {details.protection && (
          <div className="p-3 bg-white rounded border border-gray-200">
            <span className="text-sm font-medium text-gray-600">防護点：</span>
            <span className="text-sm text-gray-800">{details.protection}</span>
          </div>
        )}
        <div className="p-3 bg-white rounded border border-gray-200">
          <span className="text-sm font-medium text-gray-600">価格：</span>
          <span className="text-sm text-gray-800">{details.price}</span>
        </div>
      </div>

      {details.effect && (
        <div className="p-4 bg-white rounded border border-gray-200">
          <h5 className="text-sm font-medium text-gray-600 mb-2">効果：</h5>
          <p className="text-sm text-gray-800 leading-relaxed">
            {details.effect}
          </p>
        </div>
      )}
    </div>
  </div>
);
