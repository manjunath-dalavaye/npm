/**
 * Converts an upper case string to a camel case string.
 *
 * ```typescript
 * export function UpperCaseStringToCamelCaseString(str: string): string {
 *   if (str.indexOf(" ") === -1) {
 *     return str.charAt(0).toLowerCase() + str.slice(1);
 *   }
 *   return str
 *     .toLowerCase()
 *     .split(" ")
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 *     .join("")
 *     .replace(/^\w/, (c) => c.toLowerCase());
 * }
 * ```
 *
 * @param str - The upper case string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * UpperCaseStringToCamelCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function UpperCaseStringToCamelCaseString(str: string): string {
  if (str.indexOf(" ") === -1) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(/^\w/, (c) => c.toLowerCase());
}
