/**
 * Converts an upper case string to a constant case string.
 *
 * ```typescript
 * export function UpperCaseStringToConstantCaseString(str: string): string {
 *   return str.replace(/ /g, "_");
 * }
 * ```
 *
 * @param str - The upper case string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @example
 * ```typescript
 * UpperCaseStringToConstantCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function UpperCaseStringToConstantCaseString(str: string): string {
  return str.replace(/ /g, "_");
}
