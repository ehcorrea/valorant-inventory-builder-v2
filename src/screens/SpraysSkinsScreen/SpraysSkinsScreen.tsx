import { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components/native';

import { getSprays } from '@/services/api';
import { SpraysSkinsScreenParams } from '@/types/screens';
import { spraysStore } from '@/stores';
import { Text, ButtonCard, InputSearch } from '@/components';
import { useFillFlatList, useDebounce } from '@/hooks';

import * as S from './SpraysSkinsScreen.styles';

export function SpraysSkinsScreen() {
  const theme = useTheme();
  const { replace } = useLocalSearchParams() as SpraysSkinsScreenParams;
  const { debounce, debouncedValue } = useDebounce({ initialValue: '' });
  const setSpray = spraysStore((state) => state.setSpray);

  const { data, isLoading } = useQuery({
    queryKey: ['sprays-skins'],
    queryFn: getSprays,
    staleTime: 300000,
  });

  const filterData = useMemo(
    () =>
      data?.filter((item) =>
        item?.displayName
          .toLocaleLowerCase()
          .includes(debouncedValue.toLocaleLowerCase())
      ),
    [data, debouncedValue]
  );

  const { filledData, maxColumns } = useFillFlatList({
    data: filterData,
    emptyFill: null,
    itemWidth: 180,
    maxCol: 4,
  });

  if (isLoading) {
    return (
      <View accessibilityLabel="loading sprays">
        <S.Loading
          source={require('@/assets/animations/loading-circle.json')}
        />
      </View>
    );
  }

  return (
    <View>
      <S.ContainerSearch>
        <InputSearch onChangeText={debounce} />
      </S.ContainerSearch>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: theme.spacings.xxxsmall }}
        data={filledData}
        key={maxColumns}
        numColumns={maxColumns}
        renderItem={({ item }) => {
          return (
            <S.ContainerButtonCard>
              {item && (
                <ButtonCard
                  accessibilityLabel={`image ${item.displayName}`}
                  image={item.fullIcon}
                  onPress={() => {
                    if (replace !== undefined) {
                      setSpray(item, replace);
                      router.back();
                    }
                  }}
                >
                  <ButtonCard.Footer>
                    <Text
                      adjustsFontSizeToFit
                      color="white"
                      fontFamily="card"
                      numberOfLines={2}
                      size="xsmall"
                    >
                      {item?.displayName}
                    </Text>
                  </ButtonCard.Footer>
                </ButtonCard>
              )}
            </S.ContainerButtonCard>
          );
        }}
      />
    </View>
  );
}
