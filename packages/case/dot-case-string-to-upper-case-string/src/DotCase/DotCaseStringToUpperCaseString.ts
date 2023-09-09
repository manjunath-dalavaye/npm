/**
 * Converts a dot case string to an upper case string.
 *
 * ```typescript
 * export function DotCaseStringToUpperCaseString(str: string): string {
 *   return str.replace(/\./g, " ").toUpperCase();
 * }
 * ```
 *
 * @param str - The dot case string to convert to upper case.
 * @returns The upper case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * DotCaseStringToUpperCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function DotCaseStringToUpperCaseString(str: string): string {
  return str.replace(/\./g, " ").toUpperCase();
}
