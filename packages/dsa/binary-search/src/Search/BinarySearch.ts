/**
 * Searches for a given value in a sorted array using the binary search algorithm.
 *
 * ```typescript
 * export function BinarySearch(arr: number[], val: number): number {
 *   let left = 0;
 *   let right = arr.length - 1;
 *   while (left <= right) {
 *     const mid = Math.floor((left + right) / 2);
 *     if (arr[mid] === val) {
 *       return mid;
 *     } else if (arr[mid] < val) {
 *       left = mid + 1;
 *     } else {
 *       right = mid - 1;
 *     }
 *   }
 *   return -1;
 * }
 * ```
 *
 * @param arr - The sorted array to search in.
 * @param val - The value to search for.
 * @returns The index of the first occurrence of the value in the array, or -1 if the value is not found.
 *
 * @category Data Structures
 * @group \@ilihub\/dsa
 *
 * @example
 * ```typescript
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const result = BinarySearch(arr, 5);
 * console.log(result); // 4
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {BinarySearch} from "@ilihub/code"
 *
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 *
 * const result = BinarySearch(arr, 5);
 *
 * console.log(result); // 4
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {BinarySearch} from "@ilihub/dsa"
 *
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 *
 * const result = BinarySearch(arr, 5);
 *
 * console.log(result); // 4
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 */
export function BinarySearch(arr: number[], val: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
