import React, { useState } from 'react';
import { FaPlus, FaTrash, FaShieldAlt, FaUser } from 'react-icons/fa';
import {
  GiBackpack,
  GiStarsStack,
  GiMagicLamp,
  GiSwordsPower,
} from 'react-icons/gi';
import {
  CLASSES,
  ABILITIES,
  SKILLS,
  ABILITY_CATEGORIES,
} from '../constants/gameData';
import { Card } from './Card';

interface HeroSkill {
  name: string;
  level: number;
  maxLevel: number;
  timing: string;
  skill: string;
  target: string;
  range: string;
  cost: number;
  effect: string;
}

interface SpecialAttack {
  name: string;
  level: number;
  maxLevel: number;
  timing: string;
  skill: string;
  target: string;
  range: string;
  cost: number;
  effect: string;
}

interface CharacterFormData {
  name: string;
  selectedClasses: [string, string];
  abilityBonus:
    | 'physical'
    | 'reflex'
    | 'sensory'
    | 'intellectual'
    | 'supernatural';
  skillAllocations: Record<string, number>;
  heroSkills: HeroSkill[];
  specialAttacks: SpecialAttack[];
  items: string[];
  password?: string;
}

interface CharacterCreationFormProps {
  onSubmit: (data: CharacterFormData) => void;
  isLoading?: boolean;
}

export const CharacterCreationForm: React.FC<CharacterCreationFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<CharacterFormData>({
    name: '',
    selectedClasses: [CLASSES[0].name, CLASSES[0].name],
    abilityBonus: 'physical',
    skillAllocations: {},
    heroSkills: [],
    specialAttacks: [],
    items: [],
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleSkillAllocationChange = (skillName: string, value: string) => {
    const numValue = parseInt(value, 10) || 0;
    setFormData((prev) => ({
      ...prev,
      skillAllocations: {
        ...prev.skillAllocations,
        [skillName]: Math.min(100, Math.max(0, numValue)),
      },
    }));
  };

  const skillTotal = Object.values(formData.skillAllocations).reduce(
    (sum, val) => sum + val,
    0,
  );
  const heroSkillLevelTotal = formData.heroSkills.reduce(
    (sum, skill) => sum + skill.level,
    0,
  );

  const addHeroSkill = () => {
    const newSkill: HeroSkill = {
      name: '',
      level: 1,
      maxLevel: 1,
      timing: '',
      skill: '',
      target: '',
      range: '',
      cost: 0,
      effect: '',
    };
    setFormData((prev) => ({
      ...prev,
      heroSkills: [...prev.heroSkills, newSkill],
    }));
  };

  const updateHeroSkill = (
    index: number,
    field: keyof HeroSkill,
    value: string,
  ) => {
    let processedValue: string | number = value;
    if (field === 'level' || field === 'maxLevel' || field === 'cost') {
      processedValue = parseInt(value, 10) || (field === 'level' ? 1 : 0);
    }
    setFormData((prev) => ({
      ...prev,
      heroSkills: prev.heroSkills.map((skill, i) =>
        i === index ? { ...skill, [field]: processedValue } : skill,
      ),
    }));
  };

  const removeHeroSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      heroSkills: prev.heroSkills.filter((_, i) => i !== index),
    }));
  };

  const addSpecialAttack = () => {
    const newAttack: SpecialAttack = {
      name: '',
      level: 1,
      maxLevel: 1,
      timing: '',
      skill: '',
      target: '',
      range: '',
      cost: 0,
      effect: '',
    };
    setFormData((prev) => ({
      ...prev,
      specialAttacks: [...prev.specialAttacks, newAttack],
    }));
  };

  const updateSpecialAttack = (
    index: number,
    field: keyof SpecialAttack,
    value: string,
  ) => {
    let processedValue: string | number = value;
    if (field === 'level' || field === 'maxLevel' || field === 'cost') {
      processedValue = parseInt(value, 10) || (field === 'level' ? 1 : 0);
    }
    setFormData((prev) => ({
      ...prev,
      specialAttacks: prev.specialAttacks.map((attack, i) =>
        i === index ? { ...attack, [field]: processedValue } : attack,
      ),
    }));
  };

  const removeSpecialAttack = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      specialAttacks: prev.specialAttacks.filter((_, i) => i !== index),
    }));
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, ''],
    }));
  };

  const updateItem = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) => (i === index ? value : item)),
    }));
  };

  const removeItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaUser className="text-blue-600" />
          基本情報
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              キャラクター名 *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              maxLength={50}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              クラス選択 *（2つ選択、同じクラス可）
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
                    setFormData((prev) => ({
                      ...prev,
                      selectedClasses: [
                        e.target.value,
                        prev.selectedClasses[1],
                      ],
                    }))
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
                    setFormData((prev) => ({
                      ...prev,
                      selectedClasses: [
                        prev.selectedClasses[0],
                        e.target.value,
                      ],
                    }))
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

          <div>
            <label
              htmlFor="abilityBonus"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
            >
              能力値ボーナス (+1) *
            </label>
            <select
              id="abilityBonus"
              value={formData.abilityBonus}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  abilityBonus: e.target.value as typeof formData.abilityBonus,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {ABILITIES.map((ability) => (
                <option key={ability.key} value={ability.key}>
                  {ability.label}
                </option>
              ))}
            </select>
          </div>
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

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <GiMagicLamp className="text-orange-600" />
            ヒーロースキル（合計7レベル）
          </h2>
          <button
            type="button"
            onClick={addHeroSkill}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
          >
            <FaPlus size={14} />
            追加
          </button>
        </div>
        <div className="space-y-4">
          {formData.heroSkills.map((skill, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    スキル名
                  </label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) =>
                      updateHeroSkill(index, 'name', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    レベル
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={skill.level}
                    onChange={(e) =>
                      updateHeroSkill(index, 'level', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    タイミング
                  </label>
                  <input
                    type="text"
                    value={skill.timing}
                    onChange={(e) =>
                      updateHeroSkill(index, 'timing', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    対応技能
                  </label>
                  <input
                    type="text"
                    value={skill.skill}
                    onChange={(e) =>
                      updateHeroSkill(index, 'skill', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    対象
                  </label>
                  <input
                    type="text"
                    value={skill.target}
                    onChange={(e) =>
                      updateHeroSkill(index, 'target', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    射程
                  </label>
                  <input
                    type="text"
                    value={skill.range}
                    onChange={(e) =>
                      updateHeroSkill(index, 'range', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    コスト
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={skill.cost}
                    onChange={(e) =>
                      updateHeroSkill(index, 'cost', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    効果
                  </label>
                  <textarea
                    value={skill.effect}
                    onChange={(e) =>
                      updateHeroSkill(index, 'effect', e.target.value)
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeHeroSkill(index)}
                className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-1"
              >
                <FaTrash size={12} />
                削除
              </button>
            </div>
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
      </Card>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <GiSwordsPower className="text-red-600" />
            必殺技（1レベル）
          </h2>
          <button
            type="button"
            onClick={addSpecialAttack}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center gap-2"
          >
            <FaPlus size={14} />
            追加
          </button>
        </div>
        <div className="space-y-4">
          {formData.specialAttacks.map((attack, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    必殺技名
                  </label>
                  <input
                    type="text"
                    value={attack.name}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'name', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    レベル
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={attack.level}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'level', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    タイミング
                  </label>
                  <input
                    type="text"
                    value={attack.timing}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'timing', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    対応技能
                  </label>
                  <input
                    type="text"
                    value={attack.skill}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'skill', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    対象
                  </label>
                  <input
                    type="text"
                    value={attack.target}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'target', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    射程
                  </label>
                  <input
                    type="text"
                    value={attack.range}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'range', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    コスト
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={attack.cost}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'cost', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    効果
                  </label>
                  <textarea
                    value={attack.effect}
                    onChange={(e) =>
                      updateSpecialAttack(index, 'effect', e.target.value)
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeSpecialAttack(index)}
                className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-1"
              >
                <FaTrash size={12} />
                削除
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <GiBackpack className="text-green-600" />
            アイテム（価格20点分）
          </h2>
          <button
            type="button"
            onClick={addItem}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-2"
          >
            <FaPlus size={14} />
            追加
          </button>
        </div>
        <div className="space-y-2">
          {formData.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={item}
                onChange={(e) => updateItem(index, e.target.value)}
                placeholder="アイテム名"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="px-3 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-1"
              >
                <FaTrash size={12} />
                削除
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaShieldAlt className="text-gray-600" />
          セキュリティ設定
        </h2>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            パスワード（任意）
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="パスワードを設定する場合は入力してください"
          />
          <p className="mt-1 text-sm text-gray-500">
            パスワードを設定すると、キャラクターシートの閲覧・編集にパスワードが必要になります
          </p>
        </div>
      </Card>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'キャラクター作成中...' : 'キャラクターを作成'}
        </button>
      </div>
    </form>
  );
};
