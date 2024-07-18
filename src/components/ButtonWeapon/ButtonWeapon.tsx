import { TouchableOpacityProps } from 'react-native';

import { Text } from '../Text/Text';

import * as S from './ButtonWeapon.styles';

export type ButtonWeaponProps = {
  image: string;
  variant?: 'weapon' | 'weapon-skin';
  displayName: string;
} & TouchableOpacityProps;

export function ButtonWeapon({
  image,
  variant = 'weapon',
  displayName,
  ...props
}: ButtonWeaponProps) {
  return (
    <S.Button variant={variant} {...props}>
      {variant === 'weapon-skin' && (
        <S.LabelWeapon>
          <Text.Category adjustsFontSizeToFit numberOfLines={1} color="white">
            {displayName}
          </Text.Category>
        </S.LabelWeapon>
      )}

      <S.ContainerImage variant={variant}>
        <S.ImageWeapon
          accessibilityLabel={`${displayName} button`}
          source={image}
        />
      </S.ContainerImage>
    </S.Button>
  );
}
