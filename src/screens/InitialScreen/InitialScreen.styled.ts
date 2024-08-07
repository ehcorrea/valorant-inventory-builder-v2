import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: red;
`;

export const SafeAreaView = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xsmall}px;
  `}
`;

export const ContainerTitle = styled.View`
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: #00000091;
    flex: 1;
    padding: ${theme.spacings.large}px;
    position: relative;
  `}
`;

export const ContainerButton = styled.SafeAreaView`
  width: 80%;
  max-width: 500px;
  align-self: center;
`;
