import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

export const Button = styled(TouchableOpacity)`
  height: 330px;
  width: 130px;
`;

export const ImageCard = styled(Image).attrs<ImageProps>({
  contentFit: 'contain',
})`
  height: 100%;
  width: 100%;
`;
