import { Weapon } from '@/types/weapon';

import { create } from '../zustand';

type State = { itens: Weapon[]; isLoading: boolean };

type Actions = {
  requestWeapons: () => void;
  setWeapons: (itens: Weapon[]) => void;
};
export const initialState: State = {
  itens: [],
  isLoading: false,
};

export const weaponsStore = create<State & Actions>((set) => ({
  ...initialState,
  requestWeapons() {
    set({ isLoading: true });
  },
  setWeapons(weapons) {
    set({ itens: weapons, isLoading: false });
  },
}));
