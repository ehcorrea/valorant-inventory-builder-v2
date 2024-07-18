import { ScrollView } from 'react-native';
import { router } from 'expo-router';

import { spraysStore } from '@/stores';

import * as S from './SpraysScreen.styles';

export function SpraysScreen() {
  const { sprays } = spraysStore();

  const handlePushSkinsSprays = (replace: number) => {
    router.push({ pathname: '/skins/sprays', params: { replace } });
  };

  return (
    <ScrollView bounces={false}>
      <S.Container>
        <S.ContainerRow>
          <S.Spray
            accessibilityLabel="select spray 1"
            image={sprays[0].fullIcon}
            onPress={() => handlePushSkinsSprays(0)}
          />
          <S.Spray
            accessibilityLabel="select spray 2"
            image={sprays[1].fullIcon}
            onPress={() => handlePushSkinsSprays(1)}
          />
        </S.ContainerRow>
        <S.ContainerRow>
          <S.Spray
            accessibilityLabel="select spray 3"
            image={sprays[2].fullIcon}
            onPress={() => handlePushSkinsSprays(2)}
          />
          <S.Spray
            accessibilityLabel="select spray 4"
            image={sprays[3].fullIcon}
            onPress={() => handlePushSkinsSprays(3)}
          />
        </S.ContainerRow>
      </S.Container>
    </ScrollView>
  );
}
