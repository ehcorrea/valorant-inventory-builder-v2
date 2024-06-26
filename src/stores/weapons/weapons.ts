import { WeaponCategory, Chroma, Weapons } from '@/types/weapon';
import { weapons } from '@/constants';

import { create } from '../zustand';

type State = { weapons: Weapons };

type Actions = {
  setWeaponSkin: (chroma: Chroma, WeaponCategory: WeaponCategory) => void;
};
export const initialStateWeapons: State = {
  weapons,
};

export const weaponsStore = create<State & Actions>((set, get) => ({
  ...initialStateWeapons,
  setWeaponSkin(chroma, WeaponCategory) {
    const weapons = get().weapons;
    const weaponCategory = weapons[WeaponCategory];
    set({
      weapons: { ...weapons, [WeaponCategory]: { ...weaponCategory, chroma } },
    });
  },
}));
