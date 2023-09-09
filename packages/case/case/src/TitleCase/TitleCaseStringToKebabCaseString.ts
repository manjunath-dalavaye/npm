/**
 * Converts a title case string to a kebab case string.
 *
 * ```typescript
 * export function TitleCaseStringToKebabCaseString(str: string): string {
 *   return str.replace(/\s+/g, "-").toLowerCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * TitleCaseStringToKebabCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function TitleCaseStringToKebabCaseString(str: string): string {
  return str.replace(/\s+/g, "-").toLowerCase();
}
