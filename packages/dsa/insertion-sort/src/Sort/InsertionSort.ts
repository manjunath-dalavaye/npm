/**
 * Sorts an array of numbers using the insertion sort algorithm.
 *
 * ```typescript
 * export function InsertionSort(arr: number[]): number[] {
 *   const n = arr.length;
 *   for (let i = 1; i < n; i++) {
 *     const key = arr[i];
 *     let j = i - 1;
 *     while (j >= 0 && arr[j] > key) {
 *       arr[j + 1] = arr[j];
 *       j--;
 *     }
 *     arr[j + 1] = key;
 *   }
 *   return arr;
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
 * const sortedArr = InsertionSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {InsertionSort} from "@ilihub/code"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = InsertionSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {InsertionSort} from "@ilihub/dsa"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = InsertionSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 */
export function InsertionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
