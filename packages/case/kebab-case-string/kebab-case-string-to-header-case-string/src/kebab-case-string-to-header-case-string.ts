/**
 * Converts a kebab case string to a header case string.
 *
 * ```typescript
 * export function KebabCaseStringToHeaderCaseString(str: string): string {
 *   const result = str
 *     .replace(/-/g, " ")
 *     .replace(/\b\w/g, (match) => match.toUpperCase());
 *   return result.replace(/ /g, "-");
 * }
 * ```
 *
 * @param str - The header case string to convert to header case.
 * @returns The header case string.
 *
 * @example
 * ```typescript
 * KebabCaseStringToHeaderCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function KebabCaseStringToHeaderCaseString(str: string): string {
  const result = str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
  return result.replace(/ /g, "-");
}
