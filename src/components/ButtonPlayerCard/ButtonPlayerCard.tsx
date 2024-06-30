import { TouchableOpacityProps } from 'react-native';

import * as S from './ButtonPlayerCard.styles';

export type ButtonPlayerCardProps = {
  image: string;
} & TouchableOpacityProps;

export function ButtonPlayerCard({ image, ...props }: ButtonPlayerCardProps) {
  return (
    <S.Button {...props}>
      <S.ImageCard source={image} />
    </S.Button>
  );
}
