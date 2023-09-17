/**
 * Converts a lower case string to an upper case string.
 *
 * ```typescript
 * export function LowerCaseStringToUpperCaseString(str: string): string {
 *   return str.toUpperCase();
 * }
 * ```
 *
 * @param str - The Lower case string to convert to upper case.
 * @returns The upper case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToUpperCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase();
}
