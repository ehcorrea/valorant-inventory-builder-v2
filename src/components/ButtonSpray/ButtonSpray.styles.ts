import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    aspect-ratio: 1/1;
    background-color: #cfcfcf11;
    border-radius: ${theme.border.radius.medium}px;
    flex: 1;
    justify-content: center;
    max-height: 250px;
    max-width: 250px;
  `}
`;

export const ImageSpray = styled(Image).attrs<ImageProps>({
  contentFit: 'cover',
})`
  height: 90%;
  width: 90%;
`;
