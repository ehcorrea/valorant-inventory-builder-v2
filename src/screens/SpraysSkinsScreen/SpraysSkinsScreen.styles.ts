import LottieView from 'lottie-react-native';
import styled, { css } from 'styled-components/native';

export const ContainerSearch = styled.View`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xxsmall}px;
    padding-horizontal: ${theme.spacings.xxsmall}px;
  `}
`;

export const ContainerButtonCard = styled.View`
  aspect-ratio: 9/10;
  flex: 1;
`;

export const Loading = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  height: 100%;
  width: 100%;
`;
