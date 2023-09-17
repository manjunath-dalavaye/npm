/**
 * Converts a camel case string to a constant case string.
 *
 * ```typescript
 * export function CamelCaseStringToConstantCaseString(str: string): string {
 *   return str.replace(/[A-Z]/g, (match) => `_${match}`).toUpperCase();
 * }
 * ```
 *
 * @param str - The camel case string to convert to constant case.
 * @returns The constant case string.
 *
 * @example
 * ```typescript
 * CamelCaseStringToConstantCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function CamelCaseStringToConstantCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `_${match}`).toUpperCase();
}
