import { fireEvent, render } from '@/test/utils';
import { ButtonCard } from './ButtonCard';
import { View } from 'react-native';

const mockedOnPress = jest.fn();

const setup = () =>
  render(
    <ButtonCard
      image="placeholder-image.png"
      onPress={mockedOnPress}
      accessibilityLabel="placeholder label"
    >
      <ButtonCard.Footer>
        <View testID="footer children" />
      </ButtonCard.Footer>
    </ButtonCard>
  );

describe('<ButtonCard/>', () => {
  test('render a presseble card with image and children', () => {
    const container = setup();
    const image = container.getByLabelText('placeholder label');
    const children = container.getByTestId('footer children');
    expect(image.props.source).toBe('placeholder-image.png');
    fireEvent.press(image);
    fireEvent.press(children);
    expect(mockedOnPress).toHaveBeenCalledTimes(2);
  });
});
