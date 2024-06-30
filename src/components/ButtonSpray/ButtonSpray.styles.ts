import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

export const Button = styled(TouchableOpacity)`
  height: 90px;
  width: 90px;
`;

export const ImageSpray = styled(Image).attrs<ImageProps>({
  contentFit: 'contain',
})`
  height: 100%;
  width: 100%;
`;
