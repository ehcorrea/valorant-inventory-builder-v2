import { Spray, Sprays, SpraysSlots } from '@/types/spray';
import { sprays } from '@/constants';

import { create } from '../zustand';

type State = { sprays: Sprays };

type Actions = {
  setSpray: (spray: Spray, slot: SpraysSlots) => void;
};

export const initialStateSprays: State = {
  sprays,
};

export const spraysStore = create<State & Actions>((set, get) => ({
  ...initialStateSprays,
  setSpray(spray, slot) {
    const sprays = get().sprays;
    set({
      sprays: { ...sprays, [slot]: spray },
    });
  },
}));
