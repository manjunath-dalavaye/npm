/**
 * Converts a camel case string to a path case string.
 *
 * ```typescript
 * export function CamelCaseStringToPathCaseString(str: string): string {
 *   return str.replace(/([a-z])([A-Z])/g, "$1/$2").toLowerCase();
 * }
 * ```
 *
 * @param str - The camel case string to convert to path case.
 * @returns The path case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * CamelCaseStringToPathCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function CamelCaseStringToPathCaseString(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1/$2").toLowerCase();
}
