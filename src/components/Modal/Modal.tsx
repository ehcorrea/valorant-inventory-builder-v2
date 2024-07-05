import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import * as S from './Modal.styles';

export type ModalProps = {
  children: React.ReactNode;
  open: boolean;
};

export function Modal({ open, children }: ModalProps) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(Number(!open), { duration: 500 })
  );

  const animatedModal = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const animatedBackdrop = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: Number(open) || withDelay(500, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      {open && (
        <>
          <S.Backdrop style={animatedBackdrop} />
          <S.Modal
            style={animatedModal}
            onLayout={(e) => {
              height.value = e.nativeEvent.layout.height;
            }}
          >
            <S.ModalBackground>
              <S.ModalContainer>{children}</S.ModalContainer>
            </S.ModalBackground>
          </S.Modal>
        </>
      )}
    </>
  );
}
