import { TextProps as TextNativeProps } from 'react-native';

import * as S from './Text.styles';

export type TextProps = {
  children: React.ReactNode;
} & TextNativeProps &
  S.TextStyleProps;

export function Text({ children, ...props }: TextProps) {
  return <S.Text {...props}>{children}</S.Text>;
}

Text.Title = ({ children, ...props }: TextProps) => {
  return <S.Title {...props}>{children}</S.Title>;
};

Text.Subtitle = ({ children, ...props }: TextProps) => {
  return <S.Subtitle {...props}>{children}</S.Subtitle>;
};
