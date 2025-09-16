import {
  calculateSkillInitialValues,
  SKILLS,
  type SkillName,
} from '@age-of-hero/core';
import React, { useState, useEffect } from 'react';

interface Abilities {
  physical: number;
  reflex: number;
  sensory: number;
  intellectual: number;
  supernatural: number;
}

interface SkillAllocationFormProps {
  abilities: Abilities;
  onSkillChange: (skillAllocations: Record<SkillName, number>) => void;
}

export const SkillAllocationForm: React.FC<SkillAllocationFormProps> = ({
  abilities,
  onSkillChange,
}) => {
  const [skillAllocations, setSkillAllocations] = useState<
    Record<SkillName, number>
  >(() => {
    const initialAllocations: Record<string, number> = {};
    Object.keys(SKILLS).forEach((skill) => {
      initialAllocations[skill] = 0;
    });
    return initialAllocations as Record<SkillName, number>;
  });

  const initialSkillValues = calculateSkillInitialValues(abilities);
  const totalAllocatedPoints = Object.values(skillAllocations).reduce(
    (sum, points) => sum + points,
    0,
  );
  const remainingPoints = 150 - totalAllocatedPoints;
  const isOverAllocated = totalAllocatedPoints > 150;

  useEffect(() => {
    onSkillChange(skillAllocations);
  }, [skillAllocations, onSkillChange]);

  const handleSkillChange = (skillName: SkillName, value: string) => {
    const numValue = Math.max(0, parseInt(value, 10) || 0); // 負の値は0にクランプ
    setSkillAllocations((prev) => ({
      ...prev,
      [skillName]: numValue,
    }));
  };

  const getSkillError = (skillName: SkillName, allocatedPoints: number) => {
    if (allocatedPoints > 100) {
      return '一技能あたりの上限は100ポイントです';
    }
    return null;
  };

  const skillsByCategory = {
    肉体系技能: ['パワー', 'タフネス', 'スタミナ'] as SkillName[],
    反射系技能: ['技術', '射撃', '運転'] as SkillName[],
    感覚系技能: ['知覚', '捜索', '追跡'] as SkillName[],
    知力系技能: ['情報', '医療', '動物'] as SkillName[],
    超常系技能: ['超常', '次元', '時間'] as SkillName[],
  };

  return (
    <div className="skill-allocation-form">
      <h3>技能ポイント割り振り</h3>

      <div className="point-summary">
        <p>残りポイント: {remainingPoints}</p>
        {isOverAllocated && (
          <p className="error">割り振り可能ポイントを超えています</p>
        )}
      </div>

      {Object.entries(skillsByCategory).map(([categoryName, skills]) => (
        <div key={categoryName} className="skill-category">
          <h4>{categoryName}</h4>
          {skills.map((skillName) => {
            const allocatedPoints = skillAllocations[skillName];
            const initialValue = initialSkillValues[skillName];
            const finalValue = initialValue + allocatedPoints;
            const error = getSkillError(skillName, allocatedPoints);

            return (
              <div key={skillName} className="skill-row">
                <label htmlFor={`skill-${skillName}`}>{skillName}</label>
                <div className="skill-values">
                  <span>初期値: {initialValue}</span>
                  <span>+</span>
                  <input
                    id={`skill-${skillName}`}
                    type="number"
                    min="0"
                    max="100"
                    value={allocatedPoints}
                    onChange={(e) =>
                      handleSkillChange(skillName, e.target.value)
                    }
                    aria-label={`${skillName}の割り振りポイント`}
                  />
                  <span>=</span>
                  <span>{finalValue}</span>
                </div>
                {error && <p className="error">{error}</p>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
