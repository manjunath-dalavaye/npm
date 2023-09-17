/**
 * Converts a sentence case string to a snake case string.
 *
 * ```typescript
 * export function SentenceCaseStringToSnakeCaseString(str: string): string {
 *   return str.toLowerCase().replace(/\s+/g, "_");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to snake case.
 * @returns Returns the snake case string.
 *
 * @example
 * ```typescript
 * SentenceCaseStringToSnakeCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SentenceCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "_");
}
