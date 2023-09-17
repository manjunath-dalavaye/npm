/**
 * Converts a constant case string to a header case string.
 *
 * ```typescript
 * export function ConstantCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .toLowerCase()
 *     .replace(/_/g, "-")
 *     .replace(/\b\w/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The constant case string to convert to header case.
 * @returns The header case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToHeaderCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToHeaderCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
