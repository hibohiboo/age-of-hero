import React from 'react';
import { FaTrash, FaShieldAlt, FaUser } from 'react-icons/fa';
import {
  GiBackpack,
  GiStarsStack,
  GiMagicLamp,
  GiSwordsPower,
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
import { SkillForm } from './form/SkillForm';

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
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <GiStarsStack className="text-purple-600" />
          技能ポイント分配（150%まで）
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
        <div
          className={`mt-4 text-sm ${skillTotal > 150 ? 'text-red-600 font-semibold' : 'text-gray-600'}`}
        >
          合計: {skillTotal}% / 150%
          {skillTotal > 150 && (
            <span className="ml-2">⚠️ 上限を超えています</span>
          )}
        </div>
      </Card>

      <CardSection
        title="ヒーロースキル（合計7レベル）"
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
        <div
          className={`mt-4 text-sm ${heroSkillLevelTotal > 7 ? 'text-red-600 font-semibold' : 'text-gray-600'}`}
        >
          合計レベル: {heroSkillLevelTotal} / 7
          {heroSkillLevelTotal > 7 && (
            <span className="ml-2">⚠️ 上限を超えています</span>
          )}
        </div>
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
        title="アイテム（価格20点分）"
        icon={GiBackpack}
        iconColor="text-green-600"
        onAdd={addItem}
        addButtonVariant="success"
      >
        <div className="space-y-2">
          {formData.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <InputField
                value={item}
                onChange={(value) => updateItem(index, value)}
                placeholder="アイテム名"
                className="flex-1"
              />
              <Button
                onClick={() => removeItem(index)}
                variant="danger"
                size="sm"
              >
                <FaTrash size={12} />
                削除
              </Button>
            </div>
          ))}
        </div>
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
