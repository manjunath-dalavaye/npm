/**
 * Converts a sentence case string to a dot case string.
 *
 * ```typescript
 * export function SentenceCaseStringToDotCaseString(str: string): string {
 *   return str.toLowerCase().replace(/\s+/g, ".");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to dot case.
 * @returns Returns the dot case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * SentenceCaseStringToDotCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function SentenceCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, ".");
}
