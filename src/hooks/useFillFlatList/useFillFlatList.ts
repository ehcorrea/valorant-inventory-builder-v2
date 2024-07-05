import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

export type UseFillFlatList<T> = {
  data?: T[];
  emptyFill: T;
  itemWidth: number;
  maxCol?: number;
};

export function useFillFlatList<T>({
  data,
  emptyFill,
  itemWidth,
  maxCol = 10,
}: UseFillFlatList<T>) {
  const { width } = useWindowDimensions();
  const [filledData, setFilledData] = useState<T[]>();
  const [maxColumns, setMaxColumns] = useState(maxCol);

  useEffect(() => {
    if (data) {
      const widthByItemWidth = Math.floor(width / itemWidth);
      const columns = widthByItemWidth > maxCol ? maxCol : widthByItemWidth;
      const missingColumnsLastRow =
        columns - (data.length % columns) === 0
          ? 0
          : columns - (data.length % columns);

      setMaxColumns(columns);

      if (missingColumnsLastRow) {
        setFilledData([
          ...data,
          ...Array(missingColumnsLastRow).fill(emptyFill),
        ]);
      }
    }
  }, [width, data, itemWidth, emptyFill, maxCol]);

  return { maxColumns, filledData };
}
