import { render } from '@/test/utils';
import { theme } from '@/constants';

import { TopTabsLabel } from './TopTabsLabel';

const setup = (focused?: boolean) =>
  render(<TopTabsLabel name="label name" focused={focused} />);

describe('<TopTabsLabel>', () => {
  describe('render label name', () => {
    test('when focused is false', () => {
      const container = setup();
      const text = container.getByText('label name');
      expect(text).toHaveStyle({ color: theme.colors.white });
      expect(text).toHaveStyle({ fontSize: theme.font.sizes.medium });
      expect(container).toMatchSnapshot();
    });
    test('when focused is true', () => {
      const container = setup(true);
      const text = container.getByText('label name');
      expect(text).toHaveStyle({ color: theme.colors.red });
      expect(text).toHaveStyle({ fontSize: theme.font.sizes.large });
      expect(container).toMatchSnapshot();
    });
  });
});
