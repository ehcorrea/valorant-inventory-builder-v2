import { render } from '@/test/utils';

import { Home } from './Home';

describe('<Home/>', () => {
  test('should render Home components', () => {
    const container = render(<Home />);

    expect(container.getByText('Valorant')).toBeTruthy();
    expect(container.getByText('Inventory\nBuilder')).toBeTruthy();
    expect(container.getByText('GET STARTED')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
