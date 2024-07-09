import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

export const Button = styled(TouchableOpacity)`
  max-width: 250px;
  max-height: 250px;
  aspect-ratio: 1/1;
`;

export const ImageSpray = styled(Image).attrs<ImageProps>({
  contentFit: 'cover',
})`
  height: 100%;
  width: 100%;
`;
