import { TouchableOpacityProps } from 'react-native';

import * as S from './ButtonWeapon.styles';

export type ButtonWeaponProps = {
  image: string;
} & TouchableOpacityProps;

export function ButtonWeapon({ image, ...props }: ButtonWeaponProps) {
  return (
    <S.Button {...props}>
      <S.ImageWeapon source={image} />
    </S.Button>
  );
}
