import { describe, it, expect } from 'vitest';
import { calculateAbilities } from '../../src/ability-calculation/calculateAbilities';

describe('calculateAbilities', () => {
  it('マッスルとテクノロジーの物理能力値を正しく合算すること', () => {
    // マッスル(physical: 3) + テクノロジー(physical: 1) = 4
    const result = calculateAbilities(['マッスル', 'テクノロジー']);
    
    expect(result.physical).toBe(4);
  });
});