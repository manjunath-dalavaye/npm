/**
 * Converts a path case string to a constant case string.
 *
 * ```typescript
 * export function PathCaseStringToConstantCaseString(str: string): string {
 *   return str.toUpperCase().replace(/\//g, "_");
 * }
 * ```
 *
 * @param str - The path case string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @example
 * ```typescript
 * PathCaseStringToConstantCaseString('path/case/string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function PathCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\//g, "_");
}
