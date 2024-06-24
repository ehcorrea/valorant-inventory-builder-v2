import { Weapon } from '@/types/weapon';

import { client } from './client';

export type WeaponsResponse = {
  data: {
    attributes: Weapon;
  }[];
};

export async function getWeapons() {
  const { data } = await client.get<WeaponsResponse>(`/weapons`);
  return data;
}

export type SkinsResponse = {
  chromas: Exclude<SkinsResponse[], 'chromas'>;
  displayIcon?: string;
  displayName: string;
  fullRender: string;
  streamedVideo?: string;
  swatch?: string;
  uuid: string;
}[];

export type SkinsRequest = {
  uuid: string;
};

export async function getSkins({ uuid }: SkinsRequest) {
  const { data } = await client.get<SkinsResponse>(`/skins?uuid=${uuid}`);

  return data;
}
