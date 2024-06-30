import { Weapons, WeaponCategory } from '@/types/weapon';

export const weapons: Weapons = {
  [WeaponCategory.Melee]: [
    {
      uuid: '2f59173c-4bed-b6c3-2191-dea9b58be9c7',
      placeholder: require('@/assets/images/placeholder-melee.png'),
      name: 'Melee',
      chroma: null,
    },
  ],
  [WeaponCategory.Sidearm]: [
    {
      uuid: '29a0cfab-485b-f5d5-779a-b59f85e204a8',
      placeholder: require('@/assets/images/placeholder-classic.png'),
      name: 'Classic',
      chroma: null,
    },
    {
      uuid: '42da8ccc-40d5-affc-beec-15aa47b42eda',
      placeholder: require('@/assets/images/placeholder-shorty.png'),
      name: 'Shorty',
      chroma: null,
    },
    {
      uuid: '44d4e95c-4157-0037-81b2-17841bf2e8e3',
      placeholder: require('@/assets/images/placeholder-frenzy.png'),
      name: 'Frenzy',
      chroma: null,
    },
    {
      uuid: '1baa85b4-4c70-1284-64bb-6481dfc3bb4e',
      placeholder: require('@/assets/images/placeholder-ghost.png'),
      name: 'Ghost',
      chroma: null,
    },
    {
      uuid: 'e336c6b8-418d-9340-d77f-7a9e4cfe0702',
      placeholder: require('@/assets/images/placeholder-sheriff.png'),
      name: 'Sheriff',
      chroma: null,
    },
  ],
  [WeaponCategory.Smg]: [
    {
      uuid: 'f7e1b454-4ad4-1063-ec0a-159e56b58941',
      placeholder: require('@/assets/images/placeholder-stinger.png'),
      name: 'Stinger',
      chroma: null,
    },
    {
      uuid: '462080d1-4035-2937-7c09-27aa2a5c27a7',
      placeholder: require('@/assets/images/placeholder-spectre.png'),
      name: 'Spectre',
      chroma: null,
    },
  ],
  [WeaponCategory.Shotgun]: [
    {
      uuid: '910be174-449b-c412-ab22-d0873436b21b',
      placeholder: require('@/assets/images/placeholder-bucky.png'),
      name: 'Bucky',
      chroma: null,
    },
    {
      uuid: 'ec845bf4-4f79-ddda-a3da-0db3774b2794',
      placeholder: require('@/assets/images/placeholder-judge.png'),
      name: 'Judge',
      chroma: null,
    },
  ],
  [WeaponCategory.Rifle]: [
    {
      uuid: 'ae3de142-4d85-2547-dd26-4e90bed35cf7',
      placeholder: require('@/assets/images/placeholder-bulldog.png'),
      name: 'Bulldog',
      chroma: null,
    },
    {
      uuid: '4ade7faa-4cf1-8376-95ef-39884480959b',
      placeholder: require('@/assets/images/placeholder-guardian.png'),
      name: 'Guardian',
      chroma: null,
    },
    {
      uuid: 'ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a',
      placeholder: require('@/assets/images/placeholder-phantom.png'),
      name: 'Phantom',
      chroma: null,
    },
    {
      uuid: '9c82e19d-4575-0200-1a81-3eacf00cf872',
      placeholder: require('@/assets/images/placeholder-vandal.png'),
      name: 'Vandal',
      chroma: null,
    },
  ],
  [WeaponCategory.Sniper]: [
    {
      uuid: 'c4883e50-4494-202c-3ec3-6b8a9284f00b',
      placeholder: require('@/assets/images/placeholder-marshal.png'),
      name: 'Marshal',
      chroma: null,
    },
    {
      uuid: '5f0aaf7a-4289-3998-d5ff-eb9a5cf7ef5c',
      placeholder: require('@/assets/images/placeholder-outlaw.png'),
      name: 'Outlaw',
      chroma: null,
    },
    {
      uuid: 'a03b24d3-4319-996d-0f8c-94bbfba1dfc7',
      placeholder: require('@/assets/images/placeholder-operator.png'),
      name: 'Operator',
      chroma: null,
    },
  ],
  [WeaponCategory.Heavy]: [
    {
      uuid: '63e6c2b6-4a8e-869c-3d4c-e38355226584',
      placeholder: require('@/assets/images/placeholder-odin.png'),
      name: 'Odin',
      chroma: null,
    },
    {
      uuid: '55d8a0f4-4274-ca67-fe2c-06ab45efdf58	',
      placeholder: require('@/assets/images/placeholder-ares.png'),
      name: 'Ares',
      chroma: null,
    },
  ],
} as const;
