/**
 * Converts a constant case string to a dot case string.
 *
 * ```typescript
 * export function ConstantCaseStringToDotCaseString(str: string): string {
 *   return str.toLowerCase().replace(/_/g, ".");
 * }
 * ```
 *
 * @param str - The constant case string to convert to dot case.
 * @returns The dot case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToDotCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, ".");
}
