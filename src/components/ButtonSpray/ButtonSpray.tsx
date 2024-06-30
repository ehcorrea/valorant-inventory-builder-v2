import { TouchableOpacityProps } from 'react-native';

import * as S from './ButtonSpray.styles';

export type ButtonSprayProps = {
  image: string;
} & TouchableOpacityProps;

export function ButtonSpray({ image, ...props }: ButtonSprayProps) {
  return (
    <S.Button {...props}>
      <S.ImageSpray source={image} />
    </S.Button>
  );
}
