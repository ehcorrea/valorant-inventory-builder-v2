import { Text } from '@/components';
import { ScrollView, View } from 'react-native';
import styled, { css } from 'styled-components/native';

type WrapperProps = {
  insets: {
    bottom: number;
    top: number;
  };
};

export const Wrapper = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})<WrapperProps>`
  ${({ insets }) => css`
    margin-top: ${insets.top}px;
    padding-bottom: ${insets.bottom}px;
  `}
`;

export const ContainerImages = styled(View)`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    padding-horizontal: ${theme.spacings.large}px;
  `}
`;

export const ContainerSprays = styled(View)`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;
    justify-content: space-around;
    padding-left: ${theme.spacings.large}px;
  `}
`;

export const RowSprays = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerWeapons = styled(View)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge}px;
  `}
`;

export const ContainerWeaponsCategories = styled(View)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge}px;
  `}
`;

export const TitleWeaponsCategories = styled(Text.Category).attrs({
  color: 'white',
  size: 'huge',
})`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall}px;
    margin-left: ${theme.spacings.large}px;
  `}
`;

export const ContainerButtonWeapon = styled(View)`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.large}px;
  `}
`;
