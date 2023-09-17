/**
 * Sorts an array of numbers using the radix sort algorithm.
 *
 * ```typescript
 * export function RadixSort(arr: number[]): number[] {
 *   const max = Math.max(...arr);
 *   let exp = 1;
 *   while (Math.floor(max / exp) > 0) {
 *     arr = CountingSortByDigit(arr, exp);
 *     exp *= 10;
 *   }
 *   return arr;
 * }
 *
 * function CountingSortByDigit(arr: number[], exp: number): number[] {
 *   const n = arr.length;
 *   const count = new Array(10).fill(0);
 *   for (let i = 0; i < n; i++) {
 *     const digit = Math.floor(arr[i] / exp) % 10;
 *     count[digit]++;
 *   }
 *   for (let i = 1; i < 10; i++) {
 *     count[i] += count[i - 1];
 *   }
 *   const output = new Array(n);
 *   for (let i = n - 1; i >= 0; i--) {
 *     const digit = Math.floor(arr[i] / exp) % 10;
 *     output[count[digit] - 1] = arr[i];
 *     count[digit]--;
 *   }
 *   return output;
 * }
 * ```
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array of numbers.
 *
 * @example
 * ```typescript
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 * const sortedArr = RadixSort(arr);
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import {RadixSort} from "@ilihub/code"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = RadixSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @example
 * This example requires [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 * npm package to be installed.
 * ```typescript
 * import {RadixSort} from "@ilihub/dsa"
 *
 * const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];
 *
 * const sortedArr = RadixSort(arr);
 *
 * console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/dsa`](https://www.npmjs.com/package/\@ilihub/dsa)
 */
export function RadixSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  let exp = 1;
  let sortedArr = [...arr];
  while (Math.floor(max / exp) > 0) {
    sortedArr = CountingSortByDigit(sortedArr, exp);
    exp *= 10;
  }
  return sortedArr;
}

function CountingSortByDigit(arr: number[], exp: number): number[] {
  const n = arr.length;
  const count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  const output = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  return output as number[];
}
