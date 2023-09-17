/**
 * Converts a title case string to a path case string.
 *
 * ```typescript
 * export function TitleCaseStringToPathCaseString(str: string): string {
 *   return str.replace(/\s+/g, "/").toLowerCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to path case.
 * @returns Returns the path case string.
 *
 * @example
 * ```typescript
 * TitleCaseStringToPathCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function TitleCaseStringToPathCaseString(str: string): string {
  return str.replace(/\s+/g, "/").toLowerCase();
}
