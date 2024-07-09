import { rhvalue, rwvalue } from './responsive';

describe('given the screen dimensions', () => {
  describe('when 750x1334', () => {
    test('calls rwvalue and rhvalue', () => {
      const dimensions = {
        width: rwvalue(10),
        height: rhvalue(20),
      };

      expect(dimensions.width).toBe(20);
      expect(dimensions.height).toBe(34);
    });
  });
});
