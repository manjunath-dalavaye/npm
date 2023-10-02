/**
 * Converts a sentence case string to a lower case string.
 *
 * ```typescript
 * export function SentenceCaseStringToLowerCaseString(str: string): string {
 *   return str.toLowerCase();
 * }
 * ```
 *
 * @param str - The sentence case string to convert to lower case.
 * @returns Returns the lower case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToLowerCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase();
}
