/**
 * Converts a lower case string to a constant case string.
 *
 * ```typescript
 * export function LowerCaseStringToConstantCaseString(str: string): string {
 *   return str.toUpperCase().replace(/ /g, "_");
 * }
 * ```
 *
 * @param str - The Lower case string to convert to constant case.
 * @returns The constant case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToConstantCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/ /g, "_");
}
