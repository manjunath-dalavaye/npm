/**
 * Converts a camel case string to an upper case string.
 *
 * ```typescript
 * export function CamelCaseStringToUpperCaseString(str: string): string {
 *   return str.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
 * }
 * ```
 *
 * @param str - The camel case string to convert to upper case.
 * @returns The upper case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * CamelCaseStringToUpperCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function CamelCaseStringToUpperCaseString(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
}
