/**
 * Converts a title case string to a constant case string.
 *
 * ```typescript
 * export function TitleCaseStringToConstantCaseString(str: string): string {
 *   return str.replace(/\s+/g, "_").toUpperCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @example
 * ```typescript
 * TitleCaseStringToConstantCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function TitleCaseStringToConstantCaseString(str: string): string {
  return str.replace(/\s+/g, "_").toUpperCase();
}
