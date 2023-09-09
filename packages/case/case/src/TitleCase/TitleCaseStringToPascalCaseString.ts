/**
 * Converts a title case string to a pascal case string.
 *
 * ```typescript
 * export function TitleCaseStringToPascalCaseString(str: string): string {
 *   return str
 *     .replace(/\s+/g, "")
 *     .replace(/^(.)/, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The title case string to convert to pascal case.
 * @returns Returns the pascal case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * TitleCaseStringToPascalCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function TitleCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\s+/g, "")
    .replace(/^(.)/, (match) => match.toUpperCase());
}
