import { ButtonSpray } from '@/components';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-horizontal: 8px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const Spray = styled(ButtonSpray)`
  margin: 8px;
`;
