/**
 * Converts a Pascal case string to a camel case string.
 *
 * ```typescript
 * export function PascalCaseStringToCamelCaseString(str: string): string {
 *   return str.charAt(0).toLowerCase() + str.slice(1);
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToCamelCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToCamelCaseString(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
