/**
 * Converts a lower case string to a path case string.
 *
 * ```typescript
 * export function LowerCaseStringToPathCaseString(str: string): string {
 *   return str.replace(/ /g, "/");
 * }
 * ```
 *
 * @param str - The Lower case string to convert to path case.
 * @returns The path case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToPathCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToPathCaseString(str: string): string {
  return str.replace(/ /g, "/");
}
