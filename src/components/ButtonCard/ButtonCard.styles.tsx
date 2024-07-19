import { Image, ImageProps } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    aspect-ratio: 9 / 10;
    border-radius: ${theme.spacings.rhvalue(6)}px;
    flex: 1;
    margin: 5px;
    max-height: ${theme.spacings.rhvalue(324)}px;
    max-width: ${theme.spacings.rwvalue(224)}px;
    overflow: hidden;
  `}
`;

export const ContainerImage = styled(View)`
  ${({ theme }) => css`
    background-color: rgba(217, 217, 217, 0.14);
    flex: 1;
    max-height: 80%;
    padding: ${theme.spacings.rhvalue(5)}px;
    width: auto;
  `}
`;

export const CardImage = styled(Image).attrs({
  contentFit: 'contain',
})<ImageProps>`
  height: 100%;
  width: 100%;
`;

export const Footer = styled(View)`
  ${({ theme }) => css`
    background-color: #0f1923;
    flex: 1;
    max-height: 30%;
    width: auto;
    padding: ${theme.spacings.rhvalue(10)}px;
  `}
`;
