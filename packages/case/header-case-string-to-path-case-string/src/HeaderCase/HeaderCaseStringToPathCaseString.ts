/**
 * Converts a header case string to a path case string.
 *
 * ```typescript
 * export function HeaderCaseStringToPathCaseString(str: string): string {
 *   return str.toLowerCase().replace(/-/g, "/");
 * }
 * ```
 *
 * @param str - The header case string to convert to path case.
 * @returns The path case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * HeaderCaseStringToPathCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function HeaderCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "/");
}
