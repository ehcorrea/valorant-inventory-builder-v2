import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { WeaponsResponse, getWeapons } from '@/services/api';
import { weaponsStore } from '@/stores';

type UseWeapons = {
  queryKey?: string;
  fetchData?: boolean;
};

export const useWeapons = ({
  fetchData = true,
  queryKey = 'weapons',
}: UseWeapons = {}) => {
  const { setWeapons, requestWeapons, isLoading, itens } = weaponsStore();

  const { data, isFetched } = useQuery<WeaponsResponse>({
    queryKey: [queryKey],
    enabled: fetchData,
    queryFn: () => {
      requestWeapons();
      return getWeapons();
    },
  });

  useEffect(() => {
    if (isFetched && data?.data) {
      const weapons = data.data.map(({ attributes }) => attributes);
      setWeapons(weapons);
    }
  }, [data, isFetched, setWeapons]);

  return { isLoading, itens };
};
