/**
 * Converts a snake case string to a sentence case string.
 *
 * ```typescript
 * export function SnakeCaseStringToSentenceCaseString(str: string): string {
 *   return str.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
 * }
 * ```
 *
 * @param str - The snake case string to convert to sentence case.
 * @returns Returns the sentence case string.
 *
 * @example
 * ```typescript
 * SnakeCaseStringToSentenceCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SnakeCaseStringToSentenceCaseString(str: string): string {
  return str.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}
