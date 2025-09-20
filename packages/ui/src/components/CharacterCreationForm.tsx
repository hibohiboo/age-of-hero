import React from 'react';
import { FaShieldAlt, FaUser } from 'react-icons/fa';
import {
  GiBackpack,
  GiStarsStack,
  GiMagicLamp,
  GiSwordsPower,
  GiHeartBeats,
  GiMagicShield,
} from 'react-icons/gi';
import {
  ABILITIES,
  SKILLS,
  ABILITY_CATEGORIES,
  CLASSES,
} from '../constants/gameData';
import {
  useCharacterCreationForm,
  CharacterFormData,
} from '../hooks/useCharacterCreationForm';
import { Card } from './Card';
import { Button } from './form/Button';
import { CardSection } from './form/CardSection';
import { FormField, InputField, SelectField } from './form/FormField';
import { ItemForm } from './form/ItemForm';
import { LimitSettingsSection } from './form/LimitSettingsSection';
import { SkillForm } from './form/SkillForm';
import { ValidationSummary } from './form/ValidationSummary';

interface CharacterCreationFormProps {
  onSubmit: (data: CharacterFormData) => void;
  isLoading?: boolean;
}

export const CharacterCreationForm: React.FC<CharacterCreationFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const vm = useCharacterCreationForm({ onSubmit });
  const {
    formData,
    handleSubmit,
    handleSkillAllocationChange,
    updateHeroSkill,
    addHeroSkill,
    removeHeroSkill,
    updateSpecialAttack,
    addSpecialAttack,
    removeSpecialAttack,
    addItem,
    updateItem,
    removeItem,
    updateFormField,
    skillTotal,
    heroSkillLevelTotal,
    itemPriceTotal,
    calculatedAbilities,
  } = vm;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaUser className="text-blue-600" />
          基本情報
        </h2>
        <div className="space-y-4">
          <FormField label="キャラクター名" htmlFor="name" required>
            <InputField
              value={formData.name}
              onChange={(value) => updateFormField('name', value)}
              maxLength={50}
              required
            />
          </FormField>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              クラス選択
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="class1"
                  className="block text-sm text-gray-600 mb-1"
                >
                  1つ目のクラス
                </label>
                <select
                  id="class1"
                  value={formData.selectedClasses[0]}
                  onChange={(e) =>
                    updateFormField('selectedClasses', [
                      e.target.value,
                      formData.selectedClasses[1],
                    ])
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {CLASSES.map((classItem) => (
                    <option key={classItem.name} value={classItem.name}>
                      {classItem.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="class2"
                  className="block text-sm text-gray-600 mb-1"
                >
                  2つ目のクラス
                </label>
                <select
                  id="class2"
                  value={formData.selectedClasses[1]}
                  onChange={(e) =>
                    updateFormField('selectedClasses', [
                      formData.selectedClasses[0],
                      e.target.value,
                    ])
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {CLASSES.map((classItem) => (
                    <option key={classItem.name} value={classItem.name}>
                      {classItem.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <FormField
            label="能力値ボーナス (+1)"
            htmlFor="abilityBonus"
            required
          >
            <SelectField
              value={formData.abilityBonus}
              onChange={(value) => updateFormField('abilityBonus', value)}
              options={ABILITIES.map((ability) => ({
                label: ability.label,
                value: ability.key,
              }))}
              required
            />
          </FormField>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <LimitSettingsSection
              skillPointsLimit={formData.skillPointsLimit}
              heroSkillLevelLimit={formData.heroSkillLevelLimit}
              itemPriceLimit={formData.itemPriceLimit}
              onUpdate={(field, value) =>
                updateFormField(field as keyof typeof formData, value)
              }
            />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaUser className="text-green-600" />
          基礎能力値
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {ABILITY_CATEGORIES.map((ability) => {
            const abilityKey =
              ability.category as keyof typeof calculatedAbilities;
            const value = calculatedAbilities[abilityKey];
            if (typeof value !== 'number') return null;

            return (
              <div key={ability.category} className="text-center">
                <div
                  className={`text-sm font-medium ${ability.color} flex items-center justify-center gap-1 mb-1`}
                >
                  <ability.icon size={16} />
                  {ability.label}
                </div>
                <div className={`text-2xl font-bold ${ability.color}`}>
                  {value}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-sm font-medium text-red-600 flex items-center justify-center gap-1 mb-1">
              <GiHeartBeats size={16} />
              HP
            </div>
            <div className="text-xl font-bold text-red-500">
              {calculatedAbilities.hp}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-blue-600 flex items-center justify-center gap-1 mb-1">
              <GiMagicShield size={16} />
              SP
            </div>
            <div className="text-xl font-bold text-blue-500">
              {calculatedAbilities.sp}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-green-600 flex items-center justify-center gap-1 mb-1">
              <GiStarsStack size={16} />
              行動値
            </div>
            <div className="text-xl font-bold text-green-500">
              {calculatedAbilities.actionValue}
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <GiStarsStack className="text-purple-600" />
          技能ポイント分配（{formData.skillPointsLimit}%まで）
        </h2>
        <div className="space-y-6">
          {ABILITY_CATEGORIES.map((categoryInfo) => (
            <div key={categoryInfo.category} className="space-y-2">
              <h3
                className={`text-sm font-semibold flex items-center gap-2 ${categoryInfo.color}`}
              >
                <categoryInfo.icon size={18} />
                {categoryInfo.label}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-6">
                {SKILLS.filter(
                  (skill) => skill.category === categoryInfo.category,
                ).map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-2">
                    <label
                      className={`flex-1 text-sm font-medium flex items-center gap-2 ${skill.color}`}
                    >
                      <skill.icon size={14} />
                      {skill.name}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.skillAllocations[skill.name] || 0}
                      onChange={(e) =>
                        handleSkillAllocationChange(skill.name, e.target.value)
                      }
                      className="w-20 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ValidationSummary
          label="合計"
          current={skillTotal}
          limit={formData.skillPointsLimit}
          unit="%"
        />
      </Card>

      <CardSection
        title={`ヒーロースキル（合計${formData.heroSkillLevelLimit}レベル）`}
        icon={GiMagicLamp}
        iconColor="text-orange-600"
        onAdd={addHeroSkill}
      >
        <div className="space-y-4">
          {formData.heroSkills.map((skill, index) => (
            <SkillForm
              key={index}
              skill={skill}
              index={index}
              onUpdate={updateHeroSkill}
              onRemove={removeHeroSkill}
              nameLabel="スキル名"
            />
          ))}
        </div>
        <ValidationSummary
          label="合計レベル"
          current={heroSkillLevelTotal}
          limit={formData.heroSkillLevelLimit}
        />
      </CardSection>

      <CardSection
        title="必殺技（1レベル）"
        icon={GiSwordsPower}
        iconColor="text-red-600"
        onAdd={addSpecialAttack}
        addButtonVariant="purple"
      >
        <div className="space-y-4">
          {formData.specialAttacks.map((attack, index) => (
            <SkillForm
              key={index}
              skill={attack}
              index={index}
              onUpdate={updateSpecialAttack}
              onRemove={removeSpecialAttack}
              nameLabel="必殺技名"
            />
          ))}
        </div>
      </CardSection>

      <CardSection
        title={`アイテム（価格${formData.itemPriceLimit}点分）`}
        icon={GiBackpack}
        iconColor="text-green-600"
        onAdd={addItem}
        addButtonVariant="success"
      >
        <div className="space-y-4">
          {formData.items.map((item, index) => (
            <ItemForm
              key={index}
              item={item}
              index={index}
              onUpdate={updateItem}
              onRemove={removeItem}
            />
          ))}
        </div>
        <ValidationSummary
          label="合計価格"
          current={itemPriceTotal}
          limit={formData.itemPriceLimit}
          unit="点"
        />
      </CardSection>

      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaShieldAlt className="text-gray-600" />
          セキュリティ設定
        </h2>
        <div>
          <FormField label="パスワード（任意）" htmlFor="password">
            <InputField
              type="password"
              value={formData.password}
              onChange={(value) => updateFormField('password', value)}
              placeholder="パスワードを設定する場合は入力してください"
            />
          </FormField>
          <p className="mt-1 text-sm text-gray-500">
            パスワードを設定すると、キャラクターシートの閲覧・編集にパスワードが必要になります
          </p>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading} size="lg">
          {isLoading ? 'キャラクター作成中...' : 'キャラクターを作成'}
        </Button>
      </div>
    </form>
  );
};
