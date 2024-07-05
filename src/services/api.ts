import { PlayerCardsResponse } from '@/types/playerCard';
import { Skin } from '@/types/weapon';
import { SpraysResponse } from '@/types/spray';

import { client } from './client';

export type WeaponSkinsResponse = Skin[];

export type WeaponSkinsRequest = {
  uuid: string;
};

export async function getWeaponSkins({ uuid }: WeaponSkinsRequest) {
  const { data } = await client.get<WeaponSkinsResponse>(
    `/weapon/skins?uuid=${uuid}`
  );

  return data;
}

export async function getPlayerCards() {
  const { data } = await client.get<PlayerCardsResponse>(`/cards`);

  return data;
}

export async function getSprays() {
  const { data } = await client.get<SpraysResponse>(`/sprays`);

  return data;
}
