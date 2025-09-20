import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button } from './Button';
import { FormField, InputField, SelectField, TextAreaField } from './FormField';

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
          <>
            <FormField label="技能">
              <InputField
                value={item.skill || ''}
                onChange={(value) => onUpdate(index, 'skill', value)}
                placeholder="〈パワー〉"
              />
            </FormField>

            <FormField label="修正">
              <InputField
                value={item.modifier || ''}
                onChange={(value) => onUpdate(index, 'modifier', value)}
                placeholder="＋０％"
              />
            </FormField>

            <FormField label="攻撃力">
              <InputField
                value={item.attackPower || ''}
                onChange={(value) => onUpdate(index, 'attackPower', value)}
                placeholder="＋４"
              />
            </FormField>

            <FormField label="ガード値">
              <InputField
                value={item.guardValue || ''}
                onChange={(value) => onUpdate(index, 'guardValue', value)}
                placeholder="３"
              />
            </FormField>

            <FormField label="射程">
              <InputField
                value={item.range || ''}
                onChange={(value) => onUpdate(index, 'range', value)}
                placeholder="至近"
              />
            </FormField>
          </>
        )}

        {/* 防具用フィールド */}
        {isArmor && (
          <>
            <FormField label="ドッジ">
              <InputField
                value={item.dodge || ''}
                onChange={(value) => onUpdate(index, 'dodge', value)}
                placeholder="＋０％"
              />
            </FormField>

            <FormField label="行動値">
              <InputField
                value={item.actionValue || ''}
                onChange={(value) => onUpdate(index, 'actionValue', value)}
                placeholder="＋０"
              />
            </FormField>

            <FormField label="防護点">
              <InputField
                value={item.protection || ''}
                onChange={(value) => onUpdate(index, 'protection', value)}
                placeholder="５"
              />
            </FormField>
          </>
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
          <FormField label="数量">
            <InputField
              type="number"
              min="1"
              value={item.quantity || 1}
              onChange={(value) =>
                onUpdate(index, 'quantity', parseInt(value, 10) || 1)
              }
            />
          </FormField>
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
