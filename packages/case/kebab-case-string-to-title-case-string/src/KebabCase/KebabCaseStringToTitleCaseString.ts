/**
 * Converts a kebab case string to a title case string.
 *
 * ```typescript
 * export function KebabCaseStringToTitleCaseString(str: string): string {
 *   return str
 *     .replace(/-/g, " ")
 *     .replace(/\b\w/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The header case string to convert to title case.
 * @returns The title case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * KebabCaseStringToTitleCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function KebabCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
