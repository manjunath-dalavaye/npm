/**
 * Converts a header case string to a lower case string.
 *
 * ```typescript
 * export function HeaderCaseStringToLowerCaseString(str: string): string {
 *   return str.toLowerCase().replace(/-/g, " ");
 * }
 * ```
 *
 * @param str - The header case string to convert to lower case.
 * @returns The lower case string.
 *
 * @example
 * ```typescript
 * HeaderCaseStringToLowerCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function HeaderCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, " ");
}
