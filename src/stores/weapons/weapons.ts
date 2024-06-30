import { WeaponCategory, Chroma, Weapons } from '@/types/weapon';

import { create } from '../zustand';
import weapons from '@/constants/weapons';

type State = { weapons: Weapons };

type Actions = {
  setWeaponSkin: (chroma: Chroma, WeaponCategory: WeaponCategory) => void;
};
export const initialState: State = {
  weapons,
};

export const weaponsStore = create<State & Actions>((set, get) => ({
  ...initialState,
  setWeaponSkin(chroma, WeaponCategory) {
    const weapons = get().weapons;
    const weaponCategory = weapons[WeaponCategory];
    set({
      weapons: { ...weapons, [WeaponCategory]: { ...weaponCategory, chroma } },
    });
  },
}));
