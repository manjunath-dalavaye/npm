/**
 * Converts a title case string to a lower case string.
 *
 * ```typescript
 * export function TitleCaseStringToLowerCaseString(str: string): string {
 *   return str.toLowerCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to lower case.
 * @returns Returns the lower case string.
 *
 * @example
 * ```typescript
 * TitleCaseStringToLowerCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function TitleCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase();
}
