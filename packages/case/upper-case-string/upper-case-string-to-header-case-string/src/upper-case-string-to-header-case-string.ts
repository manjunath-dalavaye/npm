/**
 * Converts an upper case string to a header case string.
 *
 * ```typescript
 * export function UpperCaseStringToHeaderCaseString(str: string): string {
 *   if (str !== str.toUpperCase()) {
 *     return str;
 *   }
 *   return str
 *     .toLowerCase()
 *     .split(" ")
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 *     .join("-");
 * }
 * ```
 *
 * @param str - The upper case string to convert to header case.
 * @returns Returns the header case string.
 *
 * @example
 * ```typescript
 * UpperCaseStringToHeaderCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function UpperCaseStringToHeaderCaseString(str: string): string {
  if (str !== str.toUpperCase()) {
    return str;
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
