import { Text } from 'react-native';

import { fireEvent, render } from '@/test/utils';

import { ButtonValorant } from './ButtonValorant';

describe('<ButtonValorant/>', () => {
  const spy = jest.fn();

  test('should render ButtonValorant with success', async () => {
    const container = render(
      <ButtonValorant testID="ButtonValorant" onPress={spy}>
        <Text>Render Text</Text>
      </ButtonValorant>
    );

    const button = await container.findByTestId('ButtonValorant');
    fireEvent.press(button);

    expect(container.getByText('Render Text')).toBeTruthy();
    expect(spy).toHaveBeenCalled();

    expect(container).toMatchSnapshot();
  });
});
