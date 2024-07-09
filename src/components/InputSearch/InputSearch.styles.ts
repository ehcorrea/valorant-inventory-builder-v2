import { TextInput, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/MaterialIcons';

export const Wrapper = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: #ffffff29;
    border-radius: 30px;
    flex-direction: row;
    height: ${theme.spacings.vertical.large}px;
    padding-horizontal: ${theme.spacings.rwvalue(8)}px;
    width: 100%;
  `}
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: theme.spacings.vertical.medium,
}))`
  border-radius: 50px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholder: 'Search',
  placeholderTextColor: '#ffffff99',
}))`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    flex: 1;
    font-size: ${theme.font.sizes.small}px;
    margin-left: ${theme.spacings.rwvalue(5)}px;
    padding-vertical: ${theme.spacings.rhvalue(8)}px;
  `}
`;
