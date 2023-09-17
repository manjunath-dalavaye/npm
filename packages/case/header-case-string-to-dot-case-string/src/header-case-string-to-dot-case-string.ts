/**
 * Converts a header case string to a dot case string.
 *
 * ```typescript
 * export function HeaderCaseStringToDotCaseString(str: string): string {
 *   return str.toLowerCase().replace(/-/g, ".");
 * }
 * ```
 *
 * @param str - The header case string to convert to dot case.
 * @returns The dot case string.
 *
 * @example
 * ```typescript
 * HeaderCaseStringToDotCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function HeaderCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, ".");
}
