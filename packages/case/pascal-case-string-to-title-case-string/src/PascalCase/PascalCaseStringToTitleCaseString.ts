/**
 * Converts a Pascal case string to a title case string.
 *
 * ```typescript
 * export function PascalCaseStringToTitleCaseString(str: string): string {
 *   return str
 *     .replace(/([A-Z])/g, " $1")
 *     .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase())
 *     .trim()
 *     .replace(/ +/g, " ");
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to title case.
 * @returns Returns the title case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToTitleCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase())
    .trim()
    .replace(/ +/g, " ");
}
