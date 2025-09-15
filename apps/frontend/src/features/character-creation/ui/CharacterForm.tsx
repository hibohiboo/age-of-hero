import { calculateAbilities } from '@age-of-hero/core';
import React, { useState } from 'react';

interface CharacterFormData {
  name: string;
  selectedClasses: [string, string];
  abilityBonus: string;
}

interface CharacterFormProps {
  onSubmit: (data: CharacterFormData) => void;
}

const CLASS_OPTIONS = [
  'マッスル',
  'テクノロジー',
  'マジカル',
  'サイキック',
  'バイオ',
  'エスペラント',
  'アーティファクト',
  'アーツ',
];

const ABILITY_OPTIONS = [
  { value: 'physical', label: '肉体' },
  { value: 'reflex', label: '反射' },
  { value: 'sensory', label: '感覚' },
  { value: 'intellectual', label: '知力' },
  { value: 'supernatural', label: '超常' },
];

export const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [firstClass, setFirstClass] = useState('');
  const [secondClass, setSecondClass] = useState('');
  const [abilityBonus, setAbilityBonus] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  // 能力値計算
  const calculatedAbilities = React.useMemo(() => {
    if (!firstClass || !secondClass) return null;
    return calculateAbilities(
      [firstClass, secondClass],
      abilityBonus || undefined,
    );
  }, [firstClass, secondClass, abilityBonus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: string[] = [];

    if (!name.trim()) {
      newErrors.push('キャラクター名は必須です');
    }

    if (!firstClass || !secondClass) {
      newErrors.push('クラスを2つ選択してください');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    onSubmit({
      name,
      selectedClasses: [firstClass, secondClass],
      abilityBonus,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-6">キャラクター作成</h1>

      {/* エラー表示 */}
      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
          {errors.map((error, index) => (
            <p key={index} className="text-red-600 text-sm">
              {error}
            </p>
          ))}
        </div>
      )}

      {/* キャラクター名 */}
      <div className="mb-6">
        <label
          htmlFor="character-name"
          className="block text-sm font-medium mb-2"
        >
          キャラクター名
        </label>
        <input
          id="character-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="キャラクター名を入力"
        />
      </div>

      {/* クラス選択 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">クラス選択</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="first-class"
              className="block text-sm font-medium mb-2"
            >
              1つ目のクラス
            </label>
            <select
              id="first-class"
              value={firstClass}
              onChange={(e) => setFirstClass(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">選択してください</option>
              {CLASS_OPTIONS.map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="second-class"
              className="block text-sm font-medium mb-2"
            >
              2つ目のクラス
            </label>
            <select
              id="second-class"
              value={secondClass}
              onChange={(e) => setSecondClass(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">選択してください</option>
              {CLASS_OPTIONS.map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ボーナス能力値 */}
      <div className="mb-6">
        <label
          htmlFor="ability-bonus"
          className="block text-sm font-medium mb-2"
        >
          ボーナス能力値
        </label>
        <select
          id="ability-bonus"
          value={abilityBonus}
          onChange={(e) => setAbilityBonus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">選択してください</option>
          {ABILITY_OPTIONS.map((ability) => (
            <option key={ability.value} value={ability.value}>
              {ability.label}
            </option>
          ))}
        </select>
      </div>

      {/* 計算結果表示 */}
      {calculatedAbilities && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <h3 className="text-lg font-semibold mb-3">計算結果</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              肉体: {calculatedAbilities.physical}
              {abilityBonus === 'physical' && ' (+1)'}
            </div>
            <div>
              反射: {calculatedAbilities.reflex}
              {abilityBonus === 'reflex' && ' (+1)'}
            </div>
            <div>
              感覚: {calculatedAbilities.sensory}
              {abilityBonus === 'sensory' && ' (+1)'}
            </div>
            <div>
              知力: {calculatedAbilities.intellectual}
              {abilityBonus === 'intellectual' && ' (+1)'}
            </div>
            <div>
              超常: {calculatedAbilities.supernatural}
              {abilityBonus === 'supernatural' && ' (+1)'}
            </div>
          </div>
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        キャラクター作成
      </button>
    </form>
  );
};
