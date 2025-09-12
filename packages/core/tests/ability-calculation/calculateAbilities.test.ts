import { describe, it, expect } from 'vitest';
import { calculateAbilities } from '../../src/ability-calculation/calculateAbilities';

describe('calculateAbilities', () => {
  it.each([
    ['physical', 4], // マッスル(3) + テクノロジー(1) = 4
    ['reflex', 4], // マッスル(2) + テクノロジー(2) = 4
  ] as const)(
    'マッスルとテクノロジーの%s能力値を正しく合算すること',
    (abilityName, expected) => {
      const result = calculateAbilities(['マッスル', 'テクノロジー']);

      expect(result[abilityName]).toBe(expected);
    },
  );
});
