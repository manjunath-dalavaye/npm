/**
 * Converts a camel case string to a lower case string.
 *
 * ```typescript
 * export function CamelCaseStringToLowerCaseString(str: string): string {
 *   return str.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`).trim();
 * }
 * ```
 *
 * @param str - The camel case string to convert to lower case.
 * @returns The lower case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * CamelCaseStringToLowerCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function CamelCaseStringToLowerCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`).trim();
}
