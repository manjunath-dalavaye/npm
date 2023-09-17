/**
 * Converts a title case string to a dot case string.
 *
 * ```typescript
 * export function TitleCaseStringToDotCaseString(str: string): string {
 *   return str.replace(/\s+/g, ".").toLowerCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to dot case.
 * @returns Returns the dot case string.
 *
 * @example
 * ```typescript
 * TitleCaseStringToDotCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function TitleCaseStringToDotCaseString(str: string): string {
  return str.replace(/\s+/g, ".").toLowerCase();
}
