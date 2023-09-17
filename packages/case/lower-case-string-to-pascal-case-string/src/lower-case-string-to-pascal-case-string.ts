/**
 * Converts a lower case string to a pascal case string.
 *
 * ```typescript
 * export function LowerCaseStringToPascalCaseString(str: string): string {
 *   return str
 *     .replace(/\b\w/g, (match) => match.toUpperCase())
 *     .replace(/\s/g, "");
 * }
 * ```
 *
 * @param str - The Lower case string to convert to pascal case.
 * @returns The pascal case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToPascalCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .replace(/\s/g, "");
}
