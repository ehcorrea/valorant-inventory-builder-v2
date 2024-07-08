import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import * as S from './ButtonValorant.styles';

export type ButtonValorantTypes = TouchableOpacityProps;

export function ButtonValorant({ children, ...props }: ButtonValorantTypes) {
  return (
    <TouchableOpacity {...props}>
      <S.Container>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Container>
    </TouchableOpacity>
  );
}
