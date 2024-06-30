import { RFValue } from 'react-native-responsive-fontsize';

import { render } from '@/test/utils';
import theme from '@/constants/theme';

import { Text } from './Text';

describe('<Text/>', () => {
  test('should render Text with success', () => {
    const container = render(<Text>Render Text</Text>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.body,
      color: theme.colors.black,
      fontSize: RFValue(theme.font.sizes.medium),
    });
  });

  test('should render Text.Title with success', () => {
    const container = render(<Text.Title>Render Text</Text.Title>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.title,
    });
  });

  test('should render Text.Subtitle with success', () => {
    const container = render(<Text.Subtitle>Render Text</Text.Subtitle>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.subtitle,
    });
  });

  test('should render Text.Category with success', () => {
    const container = render(<Text.Category>Render Text</Text.Category>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.category,
    });
  });
});
