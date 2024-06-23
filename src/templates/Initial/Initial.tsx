import { ImageBackground } from 'react-native';
import { router } from 'expo-router';

import { ButtonValorant, Text } from '@/components';
import image from '@/assets/images/background-home.png';

import * as S from './Initial.styled';

export function Initial() {
  return (
    <S.Wrapper>
      <ImageBackground style={{ flex: 1 }} source={image}>
        <S.Container>
          <S.SafeAreaView>
            <S.ContainerTitle>
              <Text.Title
                size="xxhuge"
                color="white"
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Valorant
              </Text.Title>
              <Text.Subtitle size="large" color="red">
                Inventory Builder
              </Text.Subtitle>
            </S.ContainerTitle>

            <S.ContainerButton>
              <ButtonValorant onPress={() => router.replace('(tabs)')}>
                <Text color="white" adjustsFontSizeToFit>
                  GET STARTED
                </Text>
              </ButtonValorant>
            </S.ContainerButton>
          </S.SafeAreaView>
        </S.Container>
      </ImageBackground>
    </S.Wrapper>
  );
}
