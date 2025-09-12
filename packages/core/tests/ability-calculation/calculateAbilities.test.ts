import { describe, it, expect } from 'vitest';
import { calculateAbilities } from '../../src/ability-calculation/calculateAbilities';

describe('calculateAbilities', () => {
  it.each([
    ['physical', 4],      // マッスル(3) + テクノロジー(1) = 4
    ['reflex', 4],        // マッスル(2) + テクノロジー(2) = 4
    ['sensory', 5],       // マッスル(2) + テクノロジー(3) = 5
    ['intellectual', 3],  // マッスル(1) + テクノロジー(2) = 3
    ['supernatural', 0],  // マッスル(0) + テクノロジー(0) = 0
  ] as const)(
    'マッスルとテクノロジーの%s能力値を正しく合算すること',
    (abilityName, expected) => {
      const result = calculateAbilities(['マッスル', 'テクノロジー']);

      expect(result[abilityName]).toBe(expected);
    },
  );

  it('同一クラス2つ選択時に能力値を2倍すること', () => {
    // マッスル + マッスル = マッスル × 2
    const result = calculateAbilities(['マッスル', 'マッスル']);
    
    expect(result.physical).toBe(6); // 3 * 2 = 6
    expect(result.reflex).toBe(4);   // 2 * 2 = 4
  });
});
