/**
 * Converts a lower case string to a dot case string.
 *
 * ```typescript
 * export function LowerCaseStringToDotCaseString(str: string): string {
 *   return str.replace(/ /g, ".");
 * }
 * ```
 *
 * @param str - The Lower case string to convert to dot case.
 * @returns The dot case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToDotCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToDotCaseString(str: string): string {
  return str.replace(/ /g, ".");
}
