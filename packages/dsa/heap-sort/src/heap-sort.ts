/**
 * Sorts an array of numbers using the heap sort algorithm.
 *
 * ```typescript
 * export function HeapSort(arr: number[]): number[] {
 *   const n = arr.length;
 *   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
 *     heapify(arr, n, i);
 *   }
 *   for (let i = n - 1; i >= 0; i--) {
 *     [arr[0], arr[i]] = [arr[i], arr[0]];
 *     heapify(arr, i, 0);
 *   }
 *   return arr;
 * }
 *
 * function heapify(arr: number[], n: number, i: number) {
 *   let largest = i;
 *   const left = 2 * i + 1;
 *   const right = 2 * i + 2;
 *   if (left < n && arr[left] > arr[largest]) {
 *     largest = left;
 *   }
 *   if (right < n && arr[right] > arr[largest]) {
 *     largest = right;
 *   }
 *   if (largest !== i) {
 *     [arr[i], arr[largest]] = [arr[largest], arr[i]];
 *     heapify(arr, n, largest);
 *   }
 * }
 * ```
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array of numbers.
 *
 * @example
 * ```typescript
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 * const sortedArr = HeapSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {HeapSort} from "@ilihub/code"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = HeapSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {HeapSort} from "@ilihub/dsa"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = HeapSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 */
export function HeapSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
