/**
 * Converts an upper case string to a path case string.
 *
 * ```typescript
 * export function UpperCaseStringToPathCaseString(str: string): string {
 *   return str.replace(/ /g, "/").toLowerCase();
 * }
 * ```
 *
 * @param str - The upper case string to convert to path case.
 * @returns Returns the path case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * UpperCaseStringToPathCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function UpperCaseStringToPathCaseString(str: string): string {
  return str.replace(/ /g, "/").toLowerCase();
}
