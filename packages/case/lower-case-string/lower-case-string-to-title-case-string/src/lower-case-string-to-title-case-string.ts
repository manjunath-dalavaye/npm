/**
 * Converts a lower case string to a title case string.
 *
 * ```typescript
 * export function LowerCaseStringToTitleCaseString(str: string): string {
 *   return str.replace(/\b\w/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The Lower case string to convert to title case.
 * @returns The title case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToTitleCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToTitleCaseString(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
