import styled, { css, DefaultTheme } from 'styled-components/native';
import { View } from 'react-native';
import { Text } from '../Text/Text';

type LabelProps = {
  focused: boolean;
};

export const labelModifiers = {
  focused: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.large}px;
  `,
};

export const LabelContainer = styled(View)`
  ${({ theme }) => css`
    align-items: center;
    width: ${theme.spacings.horizontal.huge}px;
  `}
`;

export const Label = styled(Text.Category)<LabelProps>`
  ${({ theme, focused }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium}px;

    ${focused && labelModifiers.focused(theme)}
  `}
`;
