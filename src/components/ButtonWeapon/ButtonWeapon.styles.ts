import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: #ffffff14;
    border-radius: ${theme.border.radius.medium}px;
    border: solid 2px ${theme.colors.red};
    height: 80px;
    justify-content: center;
    padding: 5px;
    width: 200px;
  `}
`;

export const ImageWeapon = styled(Image).attrs<ImageProps>({
  contentFit: 'contain',
})`
  height: 100%;
  width: 100%;
`;
