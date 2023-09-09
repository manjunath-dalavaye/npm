/**
 * Converts an upper case string to a kebab case string.
 *
 * ```typescript
 * export function UpperCaseStringToKebabCaseString(str: string): string {
 *   return str.replace(/ /g, "-").toLowerCase();
 * }
 * ```
 *
 * @param str - The upper case string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * UpperCaseStringToKebabCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function UpperCaseStringToKebabCaseString(str: string): string {
  return str.replace(/ /g, "-").toLowerCase();
}
