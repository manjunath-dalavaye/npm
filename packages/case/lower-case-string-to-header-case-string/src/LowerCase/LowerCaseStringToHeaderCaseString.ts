/**
 * Converts a lower case string to a header case string.
 *
 * ```typescript
 * export function LowerCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .replace(/ /g, "-")
 *     .replace(/\b\w/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The Lower case string to convert to header case.
 * @returns The header case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * LowerCaseStringToHeaderCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function LowerCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/ /g, "-")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
