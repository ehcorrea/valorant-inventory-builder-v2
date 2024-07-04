import { fireEvent, render } from '@/test/utils';

import { ButtonWeapon, ButtonWeaponProps } from './ButtonWeapon';

const mockedOnPress = jest.fn();

const setup = (props: Partial<ButtonWeaponProps>) => {
  return render(
    <ButtonWeapon
      {...(props as ButtonWeaponProps)}
      onPress={mockedOnPress}
      image="placeholder-image.png"
      testID="weapon-button"
      displayName="Weapon Display Name"
    />
  );
};

describe('given that the <ButtonWeapon> is rendered', () => {
  describe("and is 'weapon' variant", () => {
    test('pressing calls a callback', () => {
      const container = setup({ variant: 'weapon' });
      const button = container.getByTestId('weapon-button');
      fireEvent.press(button);
      expect(mockedOnPress).toHaveBeenCalled();
    });
    test('render image and dont render label', () => {
      const container = setup({ variant: 'weapon' });
      const image = container.getByLabelText('Weapon Display Name button');
      expect(image.props.source).toBe('placeholder-image.png');
      expect(container.queryByText('Weapon Display Name')).toBeFalsy();
      expect(container).toMatchSnapshot();
    });
  });
  describe("and is 'weapon-skin' variant ", () => {
    test('render label', () => {
      const container = setup({
        variant: 'weapon-skin',
      });
      expect(container.getByText('Weapon Display Name')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
