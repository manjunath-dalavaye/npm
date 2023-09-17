/**
 * Converts an upper case string to a sentence case string.
 *
 * ```typescript
 * export function UpperCaseStringToSentenceCaseString(str: string): string {
 *   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
 * }
 * ```
 *
 * @param str - The upper case string to convert to sentence case.
 * @returns Returns the sentence case string.
 *
 * @example
 * ```typescript
 * UpperCaseStringToSentenceCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function UpperCaseStringToSentenceCaseString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
