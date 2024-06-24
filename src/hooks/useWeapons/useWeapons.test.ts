import { TestProvider, mockedApi, renderHook, waitFor } from '@/test/utils';
import { WeaponsResponse } from '@/services/api';

import { useWeapons } from './useWeapons';

describe('<useWeapons/>', () => {
  const mockedResolvedValue: WeaponsResponse = {
    data: [
      { attributes: { category: 'category', name: 'name', uuid: 'uuid' } },
    ],
  };
  const setup = () => {
    return renderHook(useWeapons, { wrapper: TestProvider });
  };

  test('should request items to api and then store', async () => {
    mockedApi.getWeapons.mockResolvedValue(mockedResolvedValue);

    const { result } = setup();
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.itens).toEqual([]);

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.itens).toEqual([
        mockedResolvedValue.data[0].attributes,
      ]);
    });
  });
});
