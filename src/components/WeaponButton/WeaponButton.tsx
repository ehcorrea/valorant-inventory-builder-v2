import { TouchableOpacityProps } from 'react-native';

import * as S from './WeaponButton.styles';

export type WeaponButtonProps = {
  image: string;
} & TouchableOpacityProps;

export function WeaponButton({ image, ...props }: WeaponButtonProps) {
  return (
    <S.Button {...props}>
      <S.ImageWeapon source={image} />
    </S.Button>
  );
}
