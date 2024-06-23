import { render } from '@/test/utils';

import { InitialScreen } from './InitialScreen';

describe('<Initial/>', () => {
  test('should render Initial components', () => {
    const container = render(<InitialScreen />);

    expect(container.getByText('Valorant')).toBeTruthy();
    expect(container.getByText('Inventory\nBuilder')).toBeTruthy();
    expect(container.getByText('GET STARTED')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
