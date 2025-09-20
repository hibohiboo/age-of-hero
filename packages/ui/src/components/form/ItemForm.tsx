import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button } from './Button';
import { FormField, InputField, SelectField, TextAreaField } from './FormField';
import { WeaponFields } from './item-fields/WeaponFields';
import { ArmorFields } from './item-fields/ArmorFields';
import { ConsumableFields } from './item-fields/ConsumableFields';

interface ItemFormField {
  name: string;
  type: string;
  skill?: string;
  modifier?: string;
  attackPower?: string;
  guardValue?: string;
  range?: string;
  dodge?: string;
  actionValue?: string;
  protection?: string;
  price: number;
  effect?: string;
  quantity?: number;
}

interface ItemFormProps {
  item: ItemFormField;
  index: number;
  onUpdate: (
    index: number,
    field: keyof ItemFormField,
    value: string | number,
  ) => void;
  onRemove: (index: number) => void;
}

const ITEM_TYPES = [
  { label: '白兵', value: '白兵' },
  { label: '射撃', value: '射撃' },
  { label: '白兵/射撃', value: '白兵/射撃' },
  { label: '防具', value: '防具' },
  { label: '消耗品', value: '消耗品' },
  { label: 'その他', value: 'その他' },
];

export const ItemForm: React.FC<ItemFormProps> = ({
  item,
  index,
  onUpdate,
  onRemove,
}) => {
  const isWeapon =
    item.type === '白兵' || item.type === '射撃' || item.type === '白兵/射撃';
  const isArmor = item.type === '防具';
  const isConsumable = item.type === '消耗品';

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="アイテム名">
          <InputField
            value={item.name}
            onChange={(value) => onUpdate(index, 'name', value)}
          />
        </FormField>

        <FormField label="種別">
          <SelectField
            value={item.type}
            onChange={(value) => onUpdate(index, 'type', value)}
            options={ITEM_TYPES}
          />
        </FormField>

        {/* 武器用フィールド */}
        {isWeapon && (
          <WeaponFields
            skill={item.skill}
            modifier={item.modifier}
            attackPower={item.attackPower}
            guardValue={item.guardValue}
            range={item.range}
            onUpdate={(field, value) => onUpdate(index, field as keyof ItemFormField, value)}
          />
        )}

        {/* 防具用フィールド */}
        {isArmor && (
          <ArmorFields
            dodge={item.dodge}
            actionValue={item.actionValue}
            protection={item.protection}
            onUpdate={(field, value) => onUpdate(index, field as keyof ItemFormField, value)}
          />
        )}

        <FormField label="価格">
          <InputField
            type="number"
            min="0"
            value={item.price}
            onChange={(value) =>
              onUpdate(index, 'price', parseInt(value, 10) || 0)
            }
          />
        </FormField>

        {/* 消耗品用数量フィールド */}
        {isConsumable && (
          <ConsumableFields
            quantity={item.quantity}
            onUpdate={(field, value) => onUpdate(index, field as keyof ItemFormField, value)}
          />
        )}

        <FormField label="効果" className="md:col-span-2">
          <TextAreaField
            value={item.effect || ''}
            onChange={(value) => onUpdate(index, 'effect', value)}
            placeholder="アイテムの効果説明"
          />
        </FormField>
      </div>

      <div className="mt-2">
        <Button onClick={() => onRemove(index)} variant="danger" size="sm">
          <FaTrash size={12} />
          削除
        </Button>
      </div>
    </div>
  );
};
