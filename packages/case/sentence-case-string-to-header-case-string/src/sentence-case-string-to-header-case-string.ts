/**
 * Converts a sentence case string to a header case string.
 *
 * ```typescript
 * export function SentenceCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .split(" ")
 *     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
 *     .join("-");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to header case.
 * @returns Returns the header case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToHeaderCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToHeaderCaseString(str: string): string {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
