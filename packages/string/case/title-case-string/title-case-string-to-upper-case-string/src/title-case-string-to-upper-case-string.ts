/**
 * Converts a title case string to an upper case string.
 *
 * ```typescript
 * export function TitleCaseStringToUpperCaseString(str: string): string {
 *   return str.toUpperCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to upper case.
 * @returns Returns the upper case string.
 *
 * @example
 * ```typescript
 * TitleCaseStringToUpperCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function TitleCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase();
}
