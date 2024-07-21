import { fireEvent, render } from '@/test/utils';
import { InputSearch } from './InputSearch';

const mockedOnFocus = jest.fn();
const mockedOnChangeTest = jest.fn();

const setup = () => {
  return render(
    <InputSearch onChangeText={mockedOnChangeTest} onFocus={mockedOnFocus} />
  );
};

describe('component <InputSearch/> update value', () => {
  test('when change text', () => {
    const container = setup();
    const search = container.getByPlaceholderText('Search');
    expect(search.props.value).toBe('');
    fireEvent.changeText(search, 'mocked input value');
    expect(search.props.value).toBe('mocked input value');
    expect(mockedOnChangeTest).toHaveBeenCalledWith('mocked input value');
    expect(container).toMatchSnapshot();
  });
});
