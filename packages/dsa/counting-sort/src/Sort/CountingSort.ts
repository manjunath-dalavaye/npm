/**
 * Sorts an array of numbers using the counting sort algorithm.
 *
 * ```typescript
 * export function CountingSort(arr: number[]): number[] {
 *   const n = arr.length;
 *   if (n <= 1) {
 *     return arr;
 *   }
 *   const max = Math.max(...arr);
 *   const count = new Array(max + 1).fill(0);
 *   for (let i = 0; i < n; i++) {
 *     count[arr[i]]++;
 *   }
 *   for (let i = 1; i <= max; i++) {
 *     count[i] += count[i - 1];
 *   }
 *   const output = new Array(n);
 *   for (let i = n - 1; i >= 0; i--) {
 *     output[count[arr[i]] - 1] = arr[i];
 *     count[arr[i]]--;
 *   }
 *   return output;
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
 * const sortedArr = CountingSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {CountingSort} from "@ilihub/code"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = CountingSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {CountingSort} from "@ilihub/dsa"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = CountingSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 */
export function CountingSort(arr: number[]): number[] {
  const n = arr.length;
  if (n <= 1) {
    return arr;
  }
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  const output = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  return output;
}
