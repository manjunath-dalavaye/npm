/**
 * Sorts an array of numbers using the selection sort algorithm.
 *
 * ```typescript
 * export function SelectionSort(arr: number[]): number[] {
 *   const n = arr.length;
 *   for (let i = 0; i < n - 1; i++) {
 *     let minIndex = i;
 *     for (let j = i + 1; j < n; j++) {
 *       if (arr[j] < arr[minIndex]) {
 *         minIndex = j;
 *       }
 *     }
 *     if (minIndex !== i) {
 *       const temp = arr[i];
 *       arr[i] = arr[minIndex];
 *       arr[minIndex] = temp;
 *     }
 *   }
 *   return arr;
 * }
 * ```
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array of numbers.
 *
 * @example
 * ```typescript
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 * const sortedArr = SelectionSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SelectionSort } from "@ilihub/code";
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = SelectionSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import { SelectionSort } from "@ilihub/dsa";
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = SelectionSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 */
export function SelectionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
