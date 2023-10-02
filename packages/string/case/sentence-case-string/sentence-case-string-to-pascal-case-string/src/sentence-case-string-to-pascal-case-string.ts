/**
 * Converts a sentence case string to a pascal case string.
 *
 * ```typescript
 * export function SentenceCaseStringToPascalCaseString(str: string): string {
 *   return str
 *     .split(" ")
 *     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
 *     .join("");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to pascal case.
 * @returns Returns the pascal case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToPascalCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToPascalCaseString(str: string): string {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
