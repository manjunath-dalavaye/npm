/**
 * Converts a sentence case string to a title case string.
 *
 * ```typescript
 * export function SentenceCaseStringToTitleCaseString(str: string): string {
 *   return str
 *     .toLowerCase()
 *     .split(" ")
 *     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
 *     .join(" ");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to title case.
 * @returns Returns the title case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToTitleCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}
