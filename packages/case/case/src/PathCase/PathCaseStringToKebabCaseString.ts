/**
 * Converts a path case string to a kebab case string.
 *
 * ```typescript
 * export function PathCaseStringToKebabCaseString(str: string): string {
 *   return str.toLowerCase().replace(/\//g, "-");
 * }
 * ```
 *
 * @param str - The path case string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PathCaseStringToKebabCaseString('path/case/string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PathCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, "-");
}
