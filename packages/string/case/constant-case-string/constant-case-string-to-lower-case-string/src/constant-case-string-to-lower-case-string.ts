/**
 * Converts a constant case string to a lower case string.
 *
 * ```typescript
 * export function ConstantCaseStringToLowerCaseString(str: string): string {
 *   return str.toLowerCase().replace(/_/g, " ");
 * }
 * ```
 *
 * @param str - The constant case string to convert to lower case.
 * @returns The lower case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToLowerCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, " ");
}
