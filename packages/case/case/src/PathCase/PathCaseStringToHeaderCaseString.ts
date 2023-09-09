/**
 * Converts a path case string to a header case string.
 *
 * ```typescript
 * export function PathCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .split("/")
 *     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
 *     .join("-");
 * }
 * ```
 *
 * @param str - The path case string to convert to header case.
 * @returns Returns the header case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PathCaseStringToHeaderCaseString('path/case/string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PathCaseStringToHeaderCaseString(str: string): string {
  return str
    .split("/")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
