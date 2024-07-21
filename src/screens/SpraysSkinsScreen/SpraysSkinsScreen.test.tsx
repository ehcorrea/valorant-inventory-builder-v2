import {
  fireEvent,
  mockedApi,
  mockedRouter,
  render,
  waitFor,
} from '@/test/utils';
import expoRouter from 'expo-router';
import { spraysStore } from '@/stores';

import { SpraysSkinsScreen } from './SpraysSkinsScreen';

const setSpray = jest.fn();

const setup = async (skipLoading = true) => {
  spraysStore.setState({ setSpray });
  mockedApi.getSprays.mockResolvedValue([
    {
      displayName: 'first item',
      fullIcon: 'first-image.png',
      uuid: 'mocked-uuid',
    },
    {
      displayName: 'second item',
      fullIcon: 'second-image.png',
      uuid: 'mocked-uuid',
    },
  ]);

  const container = render(<SpraysSkinsScreen />);
  if (skipLoading) {
    await waitFor(() => expect(container.getByText('first item')).toBeTruthy());
  }
  return container;
};

describe('render a list with sprays', () => {
  describe('given that spray query is loading', () => {
    test('render animation', async () => {
      const container = await setup(false);
      expect(container.getByLabelText('loading sprays')).toBeTruthy();
    });
    describe('given that spray query is complete', () => {
      describe('and a card is pressed', () => {
        test('without search params', async () => {
          const container = await setup();
          const buttonCard = container.getByText('first item');
          fireEvent.press(buttonCard);
          expect(mockedRouter.back).not.toHaveBeenCalled();
          expect(setSpray).not.toHaveBeenCalled();
        });
        test('with search params', async () => {
          jest
            .spyOn(expoRouter, 'useLocalSearchParams')
            .mockImplementation(() => ({ replace: '4' }));
          const container = await setup();
          const buttonCard = container.getByText('first item');
          fireEvent.press(buttonCard);
          expect(mockedRouter.back).toHaveBeenCalled();
          expect(setSpray).toHaveBeenCalledWith(
            {
              displayName: 'first item',
              fullIcon: 'first-image.png',
              uuid: 'mocked-uuid',
            },
            '4'
          );
        });
      });

      test('and the search bar has a input', async () => {
        const container = await setup();
        const input = container.getByPlaceholderText('Search');
        await waitFor(() =>
          expect(container.getByText('first item')).toBeTruthy()
        );
        fireEvent.changeText(input, 'first');
        fireEvent.changeText(input, 'first');
        await waitFor(() => {
          expect(container.queryByText('third item')).toBeFalsy();
          expect(container.queryByText('second item')).toBeFalsy();
        });
        expect(container.getByText('first item')).toBeTruthy();
      });
    });
  });
});
