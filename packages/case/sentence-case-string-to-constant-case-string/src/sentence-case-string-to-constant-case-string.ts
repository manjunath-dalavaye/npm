/**
 * Converts a sentence case string to a constant case string.
 *
 * ```typescript
 * export function SentenceCaseStringToConstantCaseString(str: string): string {
 *   return str.toUpperCase().replace(/\s+/g, "_");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToConstantCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(SentenceCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(SentenceCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\s+/g, "_");
}
