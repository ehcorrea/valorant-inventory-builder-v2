import * as S from './TopTabsLabel.styles';

export type LabelProps = {
  focused?: boolean;
  name: string;
};

export const TopTabsLabel = ({ focused = false, name }: LabelProps) => (
  <S.LabelContainer>
    <S.Label focused={focused}>{name}</S.Label>
  </S.LabelContainer>
);
