/**
 * Converts an upper case string to a lower case string.
 *
 * ```typescript
 * export function UpperCaseStringToLowerCaseString(str: string): string {
 *   return str.toLowerCase();
 * }
 * ```
 *
 * @param str - The upper case string to convert to lower case.
 * @returns Returns the lower case string.
 *
 * @example
 * ```typescript
 * UpperCaseStringToLowerCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function UpperCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase();
}
