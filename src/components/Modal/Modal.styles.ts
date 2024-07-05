import { ImageBackground, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

import backgroundImage from '@/assets/images/background-modal.png';

export const Backdrop = styled(Animated.View)`
  background-color: #00000080;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Modal = styled(Animated.View)`
  ${({ theme }) => css`
    background-color: white;
    border-top-left-radius: ${theme.border.radius.large}px;
    border-top-right-radius: ${theme.border.radius.large}px;
    bottom: 0;
    height: 90%;
    position: absolute;
    width: 100%;
    z-index: 2;
  `}
`;

export const ModalBackground = styled(ImageBackground).attrs(({ theme }) => ({
  source: backgroundImage,
  imageStyle: {
    borderTopLeftRadius: theme.border.radius.large - 1,
    borderTopRightRadius: theme.border.radius.large - 1,
  },
}))`
  flex: 1;
`;

export const ModalContainer = styled(View)`
  ${({ theme }) => css`
    padding-horizontal: ${theme.spacings.large}px;
    padding-top: ${theme.spacings.large}px;
  `}
`;
