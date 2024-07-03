import { View } from 'react-native';

import { render } from '@/test/utils';

import { Modal } from './Modal';

const setup = (open: boolean) =>
  render(
    <Modal open={open}>
      <View testID="child-view" />
    </Modal>
  );

describe('given that the component is rendered', () => {
  test('when open is false, dont show children', async () => {
    const container = setup(false);
    expect(container.queryByTestId('child-view')).toBeFalsy();
    expect(container).toMatchSnapshot();
  });

  test('when open is true, show children ', async () => {
    const container = setup(true);
    expect(container.getByTestId('child-view')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
