/**
 * Converts a constant case string to a path case string.
 *
 * ```typescript
 * export function ConstantCaseStringToPathCaseString(str: string): string {
 *   return str.toLowerCase().replace(/_/g, "/");
 * }
 * ```
 *
 * @param str - The constant case string to convert to path case.
 * @returns The path case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * ConstantCaseStringToPathCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function ConstantCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, "/");
}
