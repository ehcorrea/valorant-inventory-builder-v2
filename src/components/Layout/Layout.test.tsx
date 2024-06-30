import { View } from 'react-native';

import { render } from '@/test/utils';

import { Layout } from './Layout';

const setup = () =>
  render(
    <Layout>
      <View testID="children-view" />
    </Layout>
  );

describe('<Layout/>', () => {
  test('should render children', () => {
    const container = setup();
    expect(container.getByTestId('children-view')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
