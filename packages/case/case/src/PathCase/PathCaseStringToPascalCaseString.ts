/**
 * Converts a path case string to a pascal case string.
 *
 * ```typescript
 * export function PathCaseStringToPascalCaseString(str: string): string {
 *   return str
 *     .split("/")
 *     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
 *     .join("");
 * }
 * ```
 *
 * @param str - The path case string to convert to pascal case.
 * @returns Returns the pascal case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PathCaseStringToPascalCaseString('path/case/string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PathCaseStringToPascalCaseString(str: string): string {
  return str
    .split("/")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
