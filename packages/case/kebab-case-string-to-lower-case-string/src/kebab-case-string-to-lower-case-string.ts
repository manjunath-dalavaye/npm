/**
 * Converts a kebab case string to a lower case string.
 *
 * ```typescript
 * export function KebabCaseStringToLowerCaseString(str: string): string {
 *   return str.toLowerCase().replace(/-/g, " ");
 * }
 * ```
 *
 * @param str - The header case string to convert to lower case.
 * @returns The lower case string.
 *
 * @example
 * ```typescript
 * KebabCaseStringToLowerCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function KebabCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, " ");
}
