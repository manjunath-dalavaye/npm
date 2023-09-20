/**
 * Converts a kebab case string to an upper case string.
 *
 * ```typescript
 * export function KebabCaseStringToUpperCaseString(str: string): string {
 *   return str.toUpperCase().replace(/-/g, " ");
 * }
 * ```
 *
 * @param str - The header case string to convert to upper case.
 * @returns The upper case string.
 *
 * @example
 * ```typescript
 * KebabCaseStringToUpperCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function KebabCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, " ");
}
