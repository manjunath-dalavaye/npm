/**
 * Converts a camel case string to a header case string.
 *
 * ```typescript
 * export function CamelCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .replace(/([a-z])([A-Z])/g, "$1-$2")
 *     .replace(/\b\w/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The camel case string to convert to header case.
 * @returns The header case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * CamelCaseStringToHeaderCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function CamelCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
