import { rfvalue, rhvalue, rwvalue } from '@/utils/responsive/responsive';

export const theme = {
  border: {
    radius: {
      xsmall: 4,
      small: 8,
      medium: 10,
      large: 20,
      xlarge: 30,
    },
  },
  font: {
    family: {
      title: 'Valorant-Font',
      subtitle: 'ShareTech-Regular',
      body: 'Dinnextw1g',
      category: 'Tungsten-SemiBold',
    },
    wight: {
      light: 300,
      normal: 400,
      bold: 600,
      xbold: 700,
    },
    sizes: {
      xsmall: rfvalue(12),
      small: rfvalue(14),
      medium: rfvalue(16),
      large: rfvalue(20),
      xlarge: rfvalue(24),
      xxlarge: rfvalue(28),
      huge: rfvalue(32),
      xhuge: rfvalue(42),
      xxhuge: rfvalue(60),
    },
  },
  colors: {
    white: '#FFFBF5',
    black: '#000000',
    red: '#FD4556',
    darkRed: '#53212B',
    darkenRed: '#BD3944',
  },
  spacings: {
    horizontal: {
      small: rwvalue(16),
      medium: rwvalue(22),
      large: rwvalue(30),
      huge: rwvalue(60),
    },
    vertical: {
      small: rhvalue(16),
      medium: rhvalue(22),
      large: rhvalue(30),
      huge: rhvalue(60),
    },
    rwvalue,
    rhvalue,
    xxxsmall: 5,
    xxsmall: 8,
    xsmall: 10,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 28,
    xxlarge: 32,
    huge: 44,
    xhuge: 50,
    xxhuge: 60,
  },
} as const;
