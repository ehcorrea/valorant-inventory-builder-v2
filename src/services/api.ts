import { client } from './client';

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
