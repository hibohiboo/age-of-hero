import React from 'react';
import { FaTrash } from 'react-icons/fa';
import {
  weapons,
  armor,
  consumables,
  otherItems,
  technologyItems,
} from '../../constants/gameData';
import { Button } from './Button';
import { FormField, InputField, SelectField, TextAreaField } from './FormField';
import { ArmorFields } from './item-fields/ArmorFields';
import { ConsumableFields } from './item-fields/ConsumableFields';
import { WeaponFields } from './item-fields/WeaponFields';

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
const PRESET_ITEMS = [
  ...weapons.map((w) => ({ category: '武器', ...w })),
  ...armor.map((a) => ({ category: '防具', ...a })),
  ...consumables.map((c) => ({ category: '消耗品', ...c })),
  ...otherItems.map((o) => ({ category: 'その他', ...o })),
  ...technologyItems.map((t) => ({ category: 'テクノロジー', ...t })),
];
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
  const handlePresetSelect = (value: string) => {
    const preset = PRESET_ITEMS.find((p) => p.name === value);
    if (!preset) return;

    // ItemDetails → ItemFormField へ変換
    const { details } = preset;
    const fields: Partial<ItemFormField> = {
      name: preset.name,
      type: details.type,
      skill: details.skill,
      modifier: details.modifier,
      attackPower: details.attackPower,
      guardValue: details.guardValue,
      range: details.range,
      dodge: details.dodge,
      actionValue: details.actionValue,
      protection: details.protection,
      price: details.price ?? 0,
      effect: details.effect,
    };

    (Object.keys(fields) as (keyof ItemFormField)[]).forEach((key) =>
      onUpdate(index, key, fields[key] ?? ''),
    );
  };
  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="mb-4">
        {/* ▼ プリセット選択ドロップダウン */}
        <FormField label="選択">
          <SelectField
            value=""
            options={PRESET_ITEMS.map((p) => ({
              label: `[${p.category}] ${p.name}`,
              value: p.name,
            }))}
            onChange={handlePresetSelect}
          />
        </FormField>
      </div>

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
            onUpdate={(field, value) =>
              onUpdate(index, field as keyof ItemFormField, value)
            }
          />
        )}

        {/* 防具用フィールド */}
        {isArmor && (
          <ArmorFields
            dodge={item.dodge}
            actionValue={item.actionValue}
            protection={item.protection}
            onUpdate={(field, value) =>
              onUpdate(index, field as keyof ItemFormField, value)
            }
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
            onUpdate={(field, value) =>
              onUpdate(index, field as keyof ItemFormField, value)
            }
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
