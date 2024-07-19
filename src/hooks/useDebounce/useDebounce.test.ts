import { renderHook } from '@/test/utils';

import useDebounce from './useDebounce';

jest.useFakeTimers();

const setup = (delay?: number) =>
  renderHook(() => useDebounce<string>({ delay })).result;

describe('return a debounced value', () => {
  test.each([500, 1000, 1500])('after %sms', (delay) => {
    const hook = setup(delay);
    expect(hook.current.debouncedValue).toBe(undefined);
    renderHook(() => {
      hook.current.debounce('mocked value');
    });
    expect(hook.current.debouncedValue).toBe(undefined);
    renderHook(() => {
      jest.advanceTimersByTime(delay);
    });
    expect(hook.current.debouncedValue).toBe('mocked value');
  });
});
