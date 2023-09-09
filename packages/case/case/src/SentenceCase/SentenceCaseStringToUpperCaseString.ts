/**
 * Converts a sentence case string to an upper case string.
 *
 * ```typescript
 * export function SentenceCaseStringToUpperCaseString(str: string): string {
 *   return str.toUpperCase();
 * }
 * ```
 *
 * @param str - The sentence case string to convert to upper case.
 * @returns Returns the upper case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * SentenceCaseStringToUpperCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function SentenceCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase();
}
