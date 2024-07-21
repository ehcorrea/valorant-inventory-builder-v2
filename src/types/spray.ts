export type Sprays = Record<SpraysSlots, Spray>;

export enum SpraysSlots {
  First,
  Second,
  Third,
  Fourth,
}

export type SpraysResponse = Spray[];

export type Spray = {
  displayName: string;
  fullIcon: string;
  uuid: string;
};
