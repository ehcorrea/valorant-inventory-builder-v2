import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    aspect-ratio: 1/1;
    background-color: #cfcfcf11;
    border-radius: ${theme.border.radius.medium}px;
    max-height: 250px;
    max-width: 250px;
    flex: 1;
  `}
`;

export const ImageSpray = styled(Image).attrs<ImageProps>({
  contentFit: 'cover',
})`
  height: 90%;
  width: 90%;
`;
