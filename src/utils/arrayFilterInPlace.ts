
type Predicate = (x: any, i: number, arr: Array<any>) => boolean;

export default function arrayFilterInPlace(arr: Array<any>, predicate: Predicate) {
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