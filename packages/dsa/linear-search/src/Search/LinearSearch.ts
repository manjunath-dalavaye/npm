/**
 * Searches for a given value in an array using the linear search algorithm.
 *
 * ```typescript
 * export function LinearSearch(arr: number[], val: number): number {
 *   const n = arr.length;
 *   for (let i = 0; i < n; i++) {
 *     if (arr[i] === val) {
 *       return i;
 *     }
 *   }
 *   return -1;
 * }
 * ```
 *
 * @param arr - The array to search in.
 * @param val - The value to search for.
 * @returns The index of the first occurrence of the value in the array, or -1 if the value is not found.
 *
 * @category Data Structures
 * @group \@ilihub\/dsa
 *
 * @example
 * ```typescript
 * const arr = [1,2,3,4,5,6,7,8,9,10]
 * const result = LinearSearch(arr, 5)
 * console.log(result) // 4
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {LinearSearch} from "@ilihub/code"
 *
 * const arr = [1,2,3,4,5,6,7,8,9,10]
 *
 * const result = LinearSearch(arr, 5)
 *
 * console.log(result) // 4
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {LinearSearch} from "@ilihub/dsa"
 *
 * const arr = [1,2,3,4,5,6,7,8,9,10]
 *
 * const result = LinearSearch(arr, 5)
 *
 * console.log(result) // 4
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/@ilihub/dsa)
 */
export function LinearSearch(arr: number[], val: number): number {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
