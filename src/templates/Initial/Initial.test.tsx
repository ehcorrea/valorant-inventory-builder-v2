import { render } from '@/test/utils';

import { Initial } from './Initial';

describe('<Initial/>', () => {
  test('should render Initial components', () => {
    const container = render(<Initial />);

    expect(container.getByText('Valorant')).toBeTruthy();
    expect(container.getByText('Inventory\nBuilder')).toBeTruthy();
    expect(container.getByText('GET STARTED')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
