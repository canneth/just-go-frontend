
import arrayFilterInPlace from './arrayFilterInPlace';

describe('arrayFilterInPlace<T>(arr: Array<T>, predicate: Predicate<T>)', () => {
  it('returns the same array (by referential identity) provided', () => {
    const testArr = ['hi'];
    const returnedArr = arrayFilterInPlace(testArr, () => true);
    expect(returnedArr).toBe(testArr);
  });
  it('does not modify array if array is empty', () => {
    const testArr: Array<any> = [];
    arrayFilterInPlace(testArr, () => true);
    expect(testArr).toHaveLength(0);
  });
  it('calls the provided predicate function for each element', () => {
    const testArr = [1, 2, 3, 4, 5];
    const predicateMock = jest.fn(() => true);
    arrayFilterInPlace(testArr, predicateMock);
    expect(predicateMock).toHaveBeenCalledTimes(testArr.length);
  });
  it('filters out elements for which the predicate function returns false', () => {
    const testArr = [1, 1, 1, 2, 3];
    arrayFilterInPlace(testArr, (x) => x === 1);
    const expectedArr = [1, 1, 1];
    expect(testArr).toHaveLength(expectedArr.length);
    expect(testArr).toStrictEqual(expectedArr);
  });
});