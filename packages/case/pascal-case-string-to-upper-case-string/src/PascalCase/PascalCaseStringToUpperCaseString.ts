/**
 * Converts a Pascal case string to an upper case string.
 *
 * ```typescript
 * export function PascalCaseStringToUpperCaseString(str: string): string {
 *   return str === str.toUpperCase()
 *     ? str
 *     : str
 *         .replace(/([A-Z])/g, " $1")
 *         .toUpperCase()
 *         .trim();
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to upper case.
 * @returns Returns the upper case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToUpperCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToUpperCaseString(str: string): string {
  return str === str.toUpperCase()
    ? str
    : str
        .replace(/([A-Z])/g, " $1")
        .toUpperCase()
        .trim();
}
