/**
 * Converts a path case string to a camel case string.
 *
 * ```typescript
 * export function PathCaseStringToCamelCaseString(str: string): string {
 *   if (str.indexOf("/") === -1) {
 *     return str;
 *   }
 *   return str.toLowerCase().replace(/\/(.)/g, (_, char) => char.toUpperCase());
 * }
 * ```
 *
 * @param str - The path case string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PathCaseStringToCamelCaseString('path/case/string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PathCaseStringToCamelCaseString(str: string): string {
  if (str.indexOf("/") === -1) {
    return str;
  }
  return str.toLowerCase().replace(/\/(.)/g, (_, char) => char.toUpperCase());
}
