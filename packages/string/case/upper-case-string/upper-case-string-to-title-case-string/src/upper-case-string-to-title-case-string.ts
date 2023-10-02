/**
 * Converts an upper case string to a title case string.
 *
 * ```typescript
 * export function UpperCaseStringToTitleCaseString(str: string): string {
 *   return str
 *     .toLowerCase()
 *     .split(" ")
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 *     .join(" ");
 * }
 * ```
 *
 * @param str - The upper case string to convert to title case.
 * @returns Returns the title case string.
 *
 * @example
 * ```typescript
 * UpperCaseStringToTitleCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function UpperCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
