import { PlayerCardsResponse } from '@/types/playerCard';
import { Skin } from '@/types/weapon';

import { client } from './client';

export type SkinsResponse = Skin[];

export type SkinsRequest = {
  uuid: string;
};

export async function getSkins({ uuid }: SkinsRequest) {
  const { data } = await client.get<SkinsResponse>(
    `/weapon/skins?uuid=${uuid}`
  );

  return data;
}

export async function getPlayerCards() {
  const { data } = await client.get<PlayerCardsResponse>(`/cards`);

  return data;
}
