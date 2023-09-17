/**
 * Converts an upper case string to a pascal case string.
 *
 * ```typescript
 * export function UpperCaseStringToPascalCaseString(str: string): string {
 *   if (str.indexOf(" ") === -1) {
 *     return str.charAt(0).toUpperCase() + str.slice(1);
 *   }
 *   return str
 *     .toLowerCase()
 *     .split(" ")
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 *     .join("");
 * }
 * ```
 *
 * @param str - The upper case string to convert to pascal case.
 * @returns Returns the pascal case string.
 *
 * @example
 * ```typescript
 * UpperCaseStringToPascalCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function UpperCaseStringToPascalCaseString(str: string): string {
  if (!str.includes(" ")) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
