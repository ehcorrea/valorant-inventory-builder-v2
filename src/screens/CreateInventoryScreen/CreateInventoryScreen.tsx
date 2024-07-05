import { FlatList } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ButtonPlayerCard,
  ButtonSpray,
  ButtonWeapon,
  Layout,
} from '@/components';
import { theme } from '@/constants';
import { useInventory } from '@/hooks';

import * as S from './CreateInventoryScreen.styles';

export function CreateInventoryScreen() {
  const insets = useSafeAreaInsets();
  const { playerCard, sprays, weapons } = useInventory();

  return (
    <Layout>
      <S.Wrapper insets={{ ...insets }}>
        <S.ContainerImages>
          <ButtonPlayerCard image={playerCard.largeArt} />
          <S.ContainerSprays>
            <S.RowSprays>
              <ButtonSpray image={sprays[0].fullTransparentIcon} />
              <ButtonSpray image={sprays[1].fullTransparentIcon} />
            </S.RowSprays>
            <S.RowSprays>
              <ButtonSpray image={sprays[2].fullTransparentIcon} />
              <ButtonSpray image={sprays[3].fullTransparentIcon} />
            </S.RowSprays>
          </S.ContainerSprays>
        </S.ContainerImages>
        <S.ContainerWeapons>
          {Object.entries(weapons).map(([key, value]) => (
            <S.ContainerWeaponsCategories key={key}>
              <S.TitleWeaponsCategories>
                {key.toLocaleUpperCase()}
              </S.TitleWeaponsCategories>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={value}
                keyExtractor={({ uuid }) => uuid}
                contentContainerStyle={{ paddingLeft: theme.spacings.large }}
                renderItem={({ item }) => (
                  <S.ContainerButtonWeapon>
                    <ButtonWeapon image={item.placeholder} />
                  </S.ContainerButtonWeapon>
                )}
              />
            </S.ContainerWeaponsCategories>
          ))}
        </S.ContainerWeapons>
      </S.Wrapper>
    </Layout>
  );
}
