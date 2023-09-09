/**
 * Converts a title case string to a header case string.
 *
 * ```typescript
 * export function TitleCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .replace(/ /g, "-")
 *     .toLowerCase()
 *     .split("-")
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 *     .join("-");
 * }
 * ```
 *
 * @param str - The title case string to convert to header case.
 * @returns Returns the header case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * TitleCaseStringToHeaderCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function TitleCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/ /g, "-")
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
