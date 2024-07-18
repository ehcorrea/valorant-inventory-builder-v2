import { fireEvent, mockedRouter, render } from '@/test/utils';

import { SpraysScreen } from './SpraysScreen';

const setup = () => render(<SpraysScreen />);

describe('<SpraysScreen/>', () => {
  describe('when press a spray button', () => {
    test.each([0, 1, 2, 3])('given that it is in position %s', (position) => {
      const container = setup();
      const buttonSpray = container.getByLabelText(
        `select spray ${position + 1}`
      );

      if (!position) {
        expect(container).toMatchSnapshot();
      }

      fireEvent.press(buttonSpray);
      expect(mockedRouter.push).toHaveBeenCalledWith({
        params: { replace: position },
        pathname: '/skins/sprays',
      });
    });
  });
});
