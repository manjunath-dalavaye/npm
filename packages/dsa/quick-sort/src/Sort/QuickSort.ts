/**
 * Sorts an array of numbers using the quick sort algorithm.
 *
 * ```typescript
 * export function QuickSort(arr: number[]): number[] {
 *   if (arr.length <= 1) {
 *     return arr;
 *   }
 *   const pivot = arr[0];
 *   const left = [];
 *   const right = [];
 *   for (let i = 1; i < arr.length; i++) {
 *     if (arr[i] < pivot) {
 *       left.push(arr[i]);
 *     } else {
 *       right.push(arr[i]);
 *     }
 *   }
 *   return QuickSort(left).concat(pivot, QuickSort(right));
 * }
 * ```
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array of numbers.
 *
 * @category Data Structures
 * @group \@ilihub\/dsa
 *
 * @example
 * ```typescript
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 * const sortedArr = QuickSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {QuickSort} from "@ilihub/code"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = QuickSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {QuickSort} from "@ilihub/dsa"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = QuickSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 */
export function QuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return QuickSort(left).concat(pivot, QuickSort(right));
}
