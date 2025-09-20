import { useState } from 'react';
import { CLASSES } from '../constants/gameData';

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

export interface CharacterFormData {
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

interface UseCharacterCreationFormProps {
  onSubmit: (data: CharacterFormData) => void;
}

export const useCharacterCreationForm = ({
  onSubmit,
}: UseCharacterCreationFormProps) => {
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

  const removeHeroSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      heroSkills: prev.heroSkills.filter((_, i) => i !== index),
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

  const updateFormField = <T extends keyof CharacterFormData>(
    field: T,
    value: CharacterFormData[T],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Computed values
  const skillTotal = Object.values(formData.skillAllocations).reduce(
    (sum, val) => sum + val,
    0,
  );

  const heroSkillLevelTotal = formData.heroSkills.reduce(
    (sum, skill) => sum + skill.level,
    0,
  );

  return {
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
  };
};