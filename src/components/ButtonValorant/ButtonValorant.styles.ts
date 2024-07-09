import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.white};
    height: ${theme.spacings.vertical.huge}px;
    padding: ${theme.spacings.xxxsmall}px;
    width: 100%;
  `}
`;

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.red};
    flex: 1;
    justify-content: center;
  `}
`;
