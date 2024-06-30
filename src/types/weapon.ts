export type Skin = {
  chromas: Chroma[];
  displayIcon: string;
  displayName: string;
  fullRender: string;
  streamedVideo: string | null;
  swatch: string | null;
  uuid: string;
};

export type Weapon = {
  chroma: Chroma | null;
  name: string;
  placeholder: string;
  uuid: string;
};

export type Weapons = Record<WeaponCategory, Weapon[]>;

export type Chroma = Omit<Skin, 'chromas'>;

export enum WeaponCategory {
  Melee = 'Melee',
  Sidearm = 'Sidearms',
  Smg = 'Smgs',
  Shotgun = 'Shotguns',
  Rifle = 'Rifles',
  Sniper = 'Sniper Rifles',
  Heavy = 'Machine Guns',
}
