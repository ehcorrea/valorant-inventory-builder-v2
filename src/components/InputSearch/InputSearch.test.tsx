import { fireEvent, render } from '@/test/utils';
import { InputSearch } from './InputSearch';

const mockedOnFocus = jest.fn();

const setup = () => {
  return render(<InputSearch onFocus={mockedOnFocus} />);
};

describe('component <InputSearch/> update value', () => {
  test('when change text', () => {
    const container = setup();
    const search = container.getByPlaceholderText('Search');
    expect(search.props.value).toBe('');
    fireEvent.changeText(search, 'lorem ipsum');
    expect(search.props.value).toBe('lorem ipsum');
    expect(container).toMatchSnapshot();
  });
});
