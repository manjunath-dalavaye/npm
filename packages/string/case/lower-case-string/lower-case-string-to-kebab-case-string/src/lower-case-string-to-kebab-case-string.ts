/**
 * Converts a lower case string to a kebab case string.
 *
 * ```typescript
 * export function LowerCaseStringToKebabCaseString(str: string): string {
 *   return str.replace(/ /g, "-");
 * }
 * ```
 *
 * @param str - The Lower case string to convert to kebab case.
 * @returns The kebab case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToKebabCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToKebabCaseString(str: string): string {
  return str.replace(/ /g, "-");
}
