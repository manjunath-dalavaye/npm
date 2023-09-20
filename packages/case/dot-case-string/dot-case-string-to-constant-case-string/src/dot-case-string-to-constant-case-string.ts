/**
 * Converts a dot case string to a constant case string.
 *
 * ```typescript
 * export function DotCaseStringToConstantCaseString(str: string): string {
 *   return str.toUpperCase().replace(/\./g, "_");
 * }
 * ```
 *
 * @param str - The dot case string to convert to constant case.
 * @returns The constant case string.
 *
 * @example
 * ```typescript
 * DotCaseStringToConstantCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function DotCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\./g, "_");
}
