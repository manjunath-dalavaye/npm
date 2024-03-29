/**
 * Converts a sentence case string to a path case string.
 *
 * ```typescript
 * export function SentenceCaseStringToPathCaseString(str: string): string {
 *   return str.toLowerCase().replace(/\s+/g, "/");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to path case.
 * @returns Returns the path case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToPathCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "/");
}
