import * as S from './ButtonCard.styles';

type ButtonCardProps = {
  children: React.ReactNode;
  onPress: () => void;
  image: string;
  accessibilityLabel: string;
};

export function ButtonCard({
  image,
  accessibilityLabel,
  children,
  onPress,
}: ButtonCardProps) {
  return (
    <S.Button onPress={onPress}>
      <S.ContainerImage>
        <S.CardImage source={image} accessibilityLabel={accessibilityLabel} />
      </S.ContainerImage>
      {children}
    </S.Button>
  );
}

type FooterProps = {
  children: React.ReactNode;
};

ButtonCard.Footer = ({ children }: FooterProps) => (
  <S.Footer>{children}</S.Footer>
);
