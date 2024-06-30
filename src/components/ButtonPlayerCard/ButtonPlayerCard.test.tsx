import { fireEvent, render } from '@/test/utils';

import { ButtonPlayerCard } from './ButtonPlayerCard';

const mockedOnPress = jest.fn();

const setup = () => {
  return render(
    <ButtonPlayerCard
      onPress={mockedOnPress}
      image="placeholder-image.png"
      testID="playerCard-button"
    />
  );
};

describe('given that the component is rendered', () => {
  test('render image passed by props', () => {
    const container = setup();
    expect(
      container
        .getByTestId('playerCard-button')
        .findByProps({ source: 'placeholder-image.png' })
    ).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('pressing calls a callback', () => {
    const container = setup();
    const button = container.getByTestId('playerCard-button');
    fireEvent.press(button);
    expect(mockedOnPress).toHaveBeenCalled();
  });
});
