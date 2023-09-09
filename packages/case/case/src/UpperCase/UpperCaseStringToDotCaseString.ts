/**
 * Converts an upper case string to a dot case string.
 *
 * ```typescript
 * export function UpperCaseStringToDotCaseString(str: string): string {
 *   return str.replace(/ /g, ".").toLowerCase();
 * }
 * ```
 *
 * @param str - The upper case string to convert to dot case.
 * @returns Returns the dot case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * UpperCaseStringToDotCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function UpperCaseStringToDotCaseString(str: string): string {
  return str.replace(/ /g, ".").toLowerCase();
}
