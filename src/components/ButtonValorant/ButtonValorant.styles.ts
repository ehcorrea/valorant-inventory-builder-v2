import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    height: ${theme.spacings.xxhuge}px;
    padding: ${theme.spacings.xsmall / 2}px;
    position: relative;
    width: 100%;
  `}
`;

export const ContainerOutline = styled.View`
  bottom: 0;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Outline = styled.View`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.white};
    padding: 2px;
    flex: 1;
  `}
`;

export const OutlineBottom = styled(Outline)`
  border-bottom-width: 1px;
  border-top-width: 0;
`;

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.red};
    flex: 1;
    justify-content: center;
  `}
`;
