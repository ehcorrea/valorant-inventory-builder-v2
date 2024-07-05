import React, { ScaledSize } from 'react-native';

import { renderHook } from '@/test/utils';

import { useFillFlatList } from './useFillFlatList';

const mockedList = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const setup = (width = 300, maxCol?: number) => {
  jest
    .spyOn(React, 'useWindowDimensions')
    .mockReturnValue({ width } as ScaledSize);
  return renderHook(() =>
    useFillFlatList({
      emptyFill: 0,
      data: mockedList,
      itemWidth: 150,
      maxCol,
    })
  );
};

describe('I want to get maxColumns and filledData', () => {
  describe('given the screen width is 300px', () => {
    test('without maxCol', () => {
      const { result } = setup(300);
      expect(result.current.maxColumns).toBe(2);
      expect(result.current.filledData).toEqual([...mockedList, 0]);
    });
    test('with maxCol 1', () => {
      const { result } = setup(300, 1);
      expect(result.current.maxColumns).toBe(1);
      expect(result.current.filledData).toEqual([...mockedList, 0]);
    });
  });
  describe('given the screen width is 500px', () => {
    test('without maxCol', () => {
      const { result } = setup(500);
      expect(result.current.maxColumns).toBe(3);
      expect(result.current.filledData).toEqual([...mockedList, 0, 0, 0]);
    });
    test('with maxCol 3', () => {
      const { result } = setup(500, 2);
      expect(result.current.maxColumns).toBe(2);
      expect(result.current.filledData).toEqual([...mockedList, 0]);
    });
  });
  describe('given the screen width is 900px', () => {
    test('without maxCol', () => {
      const { result } = setup(900);
      expect(result.current.maxColumns).toBe(6);
      expect(result.current.filledData).toEqual([...mockedList, 0, 0, 0]);
    });
    test('with maxCol 4', () => {
      const { result } = setup(900, 4);
      expect(result.current.maxColumns).toBe(4);
      expect(result.current.filledData).toEqual([...mockedList, 0, 0, 0]);
    });
  });
});
