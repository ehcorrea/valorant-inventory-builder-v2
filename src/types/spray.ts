export type Sprays = Record<SpraysSlots, Spray>;

export enum SpraysSlots {
  First,
  Second,
  Third,
  Fourth,
}

export type SpraysResponse = Spray[];

export type Spray = {
  animationGif: string | null;
  animationPng: string | null;
  displayName: string;
  fullIcon: string;
  fullTransparentIcon: string;
  uuid: string;
};
