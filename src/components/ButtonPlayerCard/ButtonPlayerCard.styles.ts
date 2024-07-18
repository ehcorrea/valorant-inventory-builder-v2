import { TouchableOpacity } from 'react-native';
import { Image, ImageProps } from 'expo-image';

import styled, { css } from 'styled-components/native';

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    height: ${theme.spacings.rhvalue(330)}px;
    aspect-ratio: 7/16;
  `}
`;

export const ImageCard = styled(Image).attrs<ImageProps>({
  contentFit: 'contain',
})`
  height: 100%;
  width: 100%;
`;
