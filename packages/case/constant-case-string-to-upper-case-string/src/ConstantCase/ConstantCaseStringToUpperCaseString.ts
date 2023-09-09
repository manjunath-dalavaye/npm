/**
 * Converts a constant case string to an upper case string.
 *
 * ```typescript
 * export function ConstantCaseStringToUpperCaseString(str: string): string {
 *   return str.toUpperCase().replace(/_/g, " ");
 * }
 * ```
 *
 * @param str - The constant case string to convert to upper case.
 * @returns The upper case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * ConstantCaseStringToUpperCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(ConstantCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(ConstantCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function ConstantCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/_/g, " ");
}
