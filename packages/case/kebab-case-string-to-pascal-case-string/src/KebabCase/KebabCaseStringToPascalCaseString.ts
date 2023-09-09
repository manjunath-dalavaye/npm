/**
 * Converts a kebab case string to a pascal case string.
 *
 * ```typescript
 * export function KebabCaseStringToPascalCaseString(str: string): string {
 *   return str
 *     .replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
 *     .replace(/^\w/, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The header case string to convert to pascal case.
 * @returns The pascal case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * KebabCaseStringToPascalCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function KebabCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
    .replace(/^\w/, (match) => match.toUpperCase());
}
