/**
 * Converts a header case string to a constant case string.
 *
 * ```typescript
 * export function HeaderCaseStringToConstantCaseString(str: string): string {
 *   return str.toUpperCase().replace(/-/g, "_");
 * }
 * ```
 *
 * @param str - The header case string to convert to constant case.
 * @returns The constant case string.
 *
 * @example
 * ```typescript
 * HeaderCaseStringToConstantCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function HeaderCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, "_");
}
