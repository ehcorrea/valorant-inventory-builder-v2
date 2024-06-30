import { playerCard, sprays, weapons } from '@/constants';
import { useInventory } from './useInventory';

import { renderHook } from '@/test/utils';

const setup = () => {
  return renderHook(() => useInventory());
};

describe('given call useInventory', () => {
  test('returns playerCard, sprays, weapons', () => {
    const { result } = setup();
    expect(result.current.playerCard).toEqual(playerCard);
    expect(result.current.sprays).toEqual(sprays);
    expect(result.current.weapons).toEqual(weapons);
  });
});
