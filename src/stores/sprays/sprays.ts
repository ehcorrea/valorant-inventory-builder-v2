import { Spray, Sprays, SpraysSlots } from '@/types/spray';
import { sprays } from '@/constants/sprays';

import { create } from '../zustand';

type State = { sprays: Sprays };

type Actions = {
  setSpray: (spray: Spray, slot: SpraysSlots) => void;
};

export const initialState: State = {
  sprays,
};

export const spraysStore = create<State & Actions>((set, get) => ({
  ...initialState,
  setSpray(spray, slot) {
    const sprays = get().sprays;
    set({
      sprays: { ...sprays, [slot]: spray },
    });
  },
}));
