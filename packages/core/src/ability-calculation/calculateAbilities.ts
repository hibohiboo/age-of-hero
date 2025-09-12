import { CLASSES, type ClassName } from '../game-data/classes';

export function calculateAbilities(classes: [ClassName, ClassName]) {
  const [class1, class2] = classes;
  const stats1 = CLASSES[class1];
  const stats2 = CLASSES[class2];
  
  return {
    physical: stats1.physical + stats2.physical,
    reflex: stats1.reflex + stats2.reflex,
  };
}