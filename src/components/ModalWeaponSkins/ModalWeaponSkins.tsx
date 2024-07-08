import { useState } from 'react';
import { Image } from 'expo-image';
import { useQuery } from '@tanstack/react-query';
import { View, FlatList } from 'react-native';

import { Chroma, Weapon } from '@/types/weapon';
import { getWeaponSkins } from '@/services/api';
import { useFillFlatList } from '@/hooks/';

import { ButtonWeapon } from '../ButtonWeapon/ButtonWeapon';
import { Modal, ModalProps } from '../Modal/Modal';

export type SkinsWeaponsProps = {
  weapon: Weapon | null;
  onClose: () => void;
} & Omit<ModalProps, 'children'>;

export function ModalWeaponSkins({ open, weapon, onClose }: SkinsWeaponsProps) {
  const [skin, setSkin] = useState<Chroma>();

  const { data } = useQuery({
    queryKey: ['skins-weapon', weapon?.uuid],
    queryFn: () => getWeaponSkins({ uuid: weapon!.uuid }),
    enabled: open,
    retry: false,
  });

  const { filledData, maxColumns } = useFillFlatList({
    data,
    emptyFill: null,
    itemWidth: 180,
    maxCol: 4,
  });

  return (
    <Modal open={open}>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: '#ffffff29',
              borderRadius: 20,
              width: '100%',
              aspectRatio: 3 / 1.3,
              padding: '5%',
            }}
          >
            <Image
              source={skin?.fullRender}
              style={{ width: '100%', height: '100%' }}
              contentFit="contain"
            />
          </View>
        </View>
        <FlatList
          data={filledData}
          numColumns={maxColumns}
          key={maxColumns}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ flex: 1, margin: 5 }}>
              {item && (
                <ButtonWeapon
                  variant="weapon-skin"
                  displayName={item.displayName}
                  onPress={() => {
                    setSkin(item);
                  }}
                  image={item.fullRender}
                />
              )}
            </View>
          )}
        />
      </View>
    </Modal>
  );
}
