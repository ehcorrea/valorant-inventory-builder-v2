import { TouchableOpacity, View } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

const buttonModifiers = {
  weapon: (theme: DefaultTheme) => css`
    align-items: center;
    border: solid 2px ${theme.colors.red};
    justify-content: center;
    margin: 5px;
  `,
  'weapon-skin': () => css``,
};

const containerImageModifiers = {
  weapon: () => css``,
  'weapon-skin': () => css`
    height: 80%;
    width: unset;
  `,
};

type ModifierProps = {
  variant: 'weapon' | 'weapon-skin';
};

export const Button = styled(TouchableOpacity)<ModifierProps>`
  ${({ theme, variant }) => css`
    aspect-ratio: 4 / 2;
    background-color: #ffffff14;
    border-radius: ${theme.border.radius.medium}px;
    max-height: ${theme.spacings.rhvalue(100)}px;
    overflow: hidden;
    width: 100%;

    ${buttonModifiers[variant](theme)};
  `}
`;

export const ImageWeapon = styled(Image).attrs<ImageProps>({
  contentFit: 'contain',
})`
  height: 100%;
`;

export const ContainerImage = styled(View)<ModifierProps>`
  ${({ theme, variant }) => css`
    display: flex;
    height: 100%;
    justify-content: center;
    padding: ${theme.spacings.xxxsmall}px;
    width: 100%;

    ${containerImageModifiers[variant]()}
  `}
`;

export const LabelWeapon = styled(View)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.red};
    height: 20%;
    padding-horizontal: ${theme.spacings.small}px;
    width: 100%;
  `}
`;
