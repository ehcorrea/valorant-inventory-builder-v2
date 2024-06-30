import { fireEvent, render } from '@/test/utils';

import { ButtonSpray } from './ButtonSpray';

const mockedOnPress = jest.fn();

const setup = () => {
  return render(
    <ButtonSpray
      onPress={mockedOnPress}
      image="placeholder-image.png"
      testID="weapon-button"
    />
  );
};

describe('given that the component is rendered', () => {
  test('render image passed by props', () => {
    const container = setup();
    expect(
      container
        .getByTestId('weapon-button')
        .findByProps({ source: 'placeholder-image.png' })
    ).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('pressing calls a callback', () => {
    const container = setup();
    const button = container.getByTestId('weapon-button');
    fireEvent.press(button);
    expect(mockedOnPress).toHaveBeenCalled();
  });
});
