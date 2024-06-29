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
