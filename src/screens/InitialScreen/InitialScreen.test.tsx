import { fireEvent, mockedRouter, render } from '@/test/utils';

import { InitialScreen } from './InitialScreen';

describe('<Initial/>', () => {
  test('should render Initial components', () => {
    const container = render(<InitialScreen />);
    const button = container.getByText('GET STARTED');
    expect(container.getByText('Valorant')).toBeTruthy();
    expect(container.getByText('Inventory\nBuilder')).toBeTruthy();
    expect(container).toMatchSnapshot();
    fireEvent.press(button);
    expect(mockedRouter.replace).toHaveBeenCalledWith('(tabs)');
  });
});
