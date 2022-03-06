
import haversineDistance, { LatLonCoords } from './haversineDistance';

describe('haversineDistance(p1: LatLonCoords, p2: LatLonCoords)', () => {
  it('returns the haversine distance between p1 and p2, correct to the nearest 10m', () => {
    type TestItem = { p1: LatLonCoords, p2: LatLonCoords, expected: number };
    const testList: Array<TestItem> = [
      { p1: [1.375, 103.839], p2: [1.321, 103.924], expected: 11195 },
      { p1: [1.350, 103.839], p2: [1.304, 103.701], expected: 16171 },
      { p1: [1.353, 103.754], p2: [1.277, 103.819], expected: 11118 },
      { p1: [1.362, 103.771], p2: [1.325, 103.791], expected: 4677 },
      { p1: [1.380, 103.805], p2: [1.357, 103.987], expected: 20390 }
    ];
    testList.forEach(test => {
      expect(haversineDistance(test.p1, test.p2)).toBeCloseTo(test.expected, -1);
    });
  });
});