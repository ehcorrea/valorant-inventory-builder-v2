import { Text as TextStyled } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Color, FontFamily, FontSize } from '@/types/theme';

export type TextStyleProps = {
  size?: FontSize;
  color?: Color;
  fontFamily?: FontFamily;
};

export const Text = styled(TextStyled)<TextStyleProps>`
  ${({ theme, size = 'medium', color = 'black', fontFamily = 'body' }) => css`
    color: ${theme.colors[color!]};
    font-family: ${theme.font.family[fontFamily]};
    font-size: ${RFValue(theme.font.sizes[size])}px;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.title};
    font-weight: ${theme.font.wight.bold};
  `}
`;

export const Subtitle = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.subtitle};
  `}
`;
