import * as S from './TopTabsLabel.styles';

export type TopTabsLabelProps = {
  focused?: boolean;
  name: string;
};

export const TopTabsLabel = ({ focused = false, name }: TopTabsLabelProps) => (
  <S.LabelContainer>
    <S.Label focused={focused}>{name}</S.Label>
  </S.LabelContainer>
);
