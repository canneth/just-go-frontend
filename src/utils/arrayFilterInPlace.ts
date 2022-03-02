
type Predicate<T> = (x: T, i: number, arr: Array<T>) => boolean;

export default function arrayFilterInPlace<T>(arr: Array<T>, predicate: Predicate<T>) {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (predicate(arr[i], i, arr)) {
      arr[j] = arr[i];
      j++;
    }
    i++;
  }

  arr.length = j;
  return arr;
}