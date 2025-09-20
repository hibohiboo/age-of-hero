import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { muscleSkills, artifactSkills } from '../../constants/gameData';
import { Button } from './Button';
import { FormField, InputField, SelectField, TextAreaField } from './FormField';

interface SkillFormField {
  name: string;
  level: number;
  timing: string;
  skill: string;
  target: string;
  range: string;
  cost: number;
  effect: string;
}

interface SkillFormProps {
  skill: SkillFormField;
  index: number;
  onUpdate: (index: number, field: keyof SkillFormField, value: string) => void;
  onRemove: (index: number) => void;
  nameLabel?: string;
  showMusclePresets?: boolean;
  showArtifactPresets?: boolean;
}

export const SkillForm: React.FC<SkillFormProps> = ({
  skill,
  index,
  onUpdate,
  onRemove,
  nameLabel = 'スキル名',
  showMusclePresets = false,
  showArtifactPresets = false,
}) => {
  const handlePresetSelect =
    (skills: typeof muscleSkills | typeof artifactSkills) =>
    (value: string) => {
      const preset = skills.find((s) => s.name === value);
      if (!preset) return;

      const fields = [
        ['name', preset.name],
        ['timing', preset.details.timing],
        ['skill', preset.details.skill],
        ['target', preset.details.target],
        ['range', preset.details.range],
        ['cost', preset.details.cost],
        ['effect', preset.details.effect],
      ] as const;

      fields.forEach(([field, value]) => onUpdate(index, field, `${value}`));
    };

  const handleMusclePresetSelect = handlePresetSelect(muscleSkills);
  const handleArtifactPresetSelect = handlePresetSelect(artifactSkills);

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      {(showMusclePresets || showArtifactPresets) && (
        <div className="mb-4 space-y-4">
          {showMusclePresets && (
            <FormField label="マッスルスキル選択">
              <SelectField
                value=""
                options={[
                  { label: '', value: '' },
                  ...muscleSkills.map((skill) => ({
                    label: skill.name,
                    value: skill.name,
                  })),
                ]}
                onChange={handleMusclePresetSelect}
              />
            </FormField>
          )}
          {showArtifactPresets && (
            <FormField label="アーティファクトスキル選択">
              <SelectField
                value=""
                options={[
                  { label: '', value: '' },
                  ...artifactSkills.map((skill) => ({
                    label: skill.name,
                    value: skill.name,
                  })),
                ]}
                onChange={handleArtifactPresetSelect}
              />
            </FormField>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label={nameLabel}>
          <InputField
            value={skill.name}
            onChange={(value) => onUpdate(index, 'name', value)}
          />
        </FormField>

        <FormField label="レベル">
          <InputField
            type="number"
            min="1"
            value={skill.level}
            onChange={(value) => onUpdate(index, 'level', value)}
          />
        </FormField>

        <FormField label="タイミング">
          <InputField
            value={skill.timing}
            onChange={(value) => onUpdate(index, 'timing', value)}
          />
        </FormField>

        <FormField label="対応技能">
          <InputField
            value={skill.skill}
            onChange={(value) => onUpdate(index, 'skill', value)}
          />
        </FormField>

        <FormField label="対象">
          <InputField
            value={skill.target}
            onChange={(value) => onUpdate(index, 'target', value)}
          />
        </FormField>

        <FormField label="射程">
          <InputField
            value={skill.range}
            onChange={(value) => onUpdate(index, 'range', value)}
          />
        </FormField>

        <FormField label="コスト">
          <InputField
            type="number"
            min="0"
            value={skill.cost}
            onChange={(value) => onUpdate(index, 'cost', value)}
          />
        </FormField>

        <FormField label="効果" className="md:col-span-2">
          <TextAreaField
            value={skill.effect}
            onChange={(value) => onUpdate(index, 'effect', value)}
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
