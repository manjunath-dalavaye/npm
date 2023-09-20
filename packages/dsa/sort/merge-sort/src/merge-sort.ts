/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * ```typescript
 * export function MergeSort(arr: number[]): number[] {
 *   if (arr.length <= 1) {
 *     return arr;
 *   }
 *   const mid = Math.floor(arr.length / 2);
 *   const left = MergeSort(arr.slice(0, mid));
 *   const right = MergeSort(arr.slice(mid));
 *   return Merge(left, right);
 * }
 *
 * function Merge(left: number[], right: number[]): number[] {
 *   const result = [];
 *   let i = 0;
 *   let j = 0;
 *   while (i < left.length && j < right.length) {
 *     if (left[i] < right[j]) {
 *       result.push(left[i]);
 *       i++;
 *     } else {
 *       result.push(right[j]);
 *       j++;
 *     }
 *   }
 *   return result.concat(left.slice(i)).concat(right.slice(j));
 * }
 * ```
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array of numbers.
 *
 * @example
 * ```typescript
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 * const sortedArr = MergeSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {MergeSort} from "@ilihub/code"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = MergeSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {MergeSort} from "@ilihub/dsa"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = MergeSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 */
export function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = MergeSort(arr.slice(0, mid));
  const right = MergeSort(arr.slice(mid));
  return Merge(left, right);
}

function Merge(left: number[], right: number[]): number[] {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
