/**
 * Converts a header case string to a title case string.
 *
 * ```typescript
 * export function HeaderCaseStringToTitleCaseString(str: string): string {
 *   return str
 *     .toLowerCase()
 *     .replace(/-/g, " ")
 *     .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The header case string to convert to title case.
 * @returns The title case string.
 *
 * @example
 * ```typescript
 * HeaderCaseStringToTitleCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function HeaderCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}
