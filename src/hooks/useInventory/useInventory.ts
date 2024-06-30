import { playerCardStore, spraysStore, weaponsStore } from '@/stores';

export function useInventory() {
  const playerCard = playerCardStore((state) => state.playerCard);
  const sprays = spraysStore((state) => state.sprays);
  const weapons = weaponsStore((state) => state.weapons);

  return { playerCard, sprays, weapons };
}
