/**
 * Converts a path case string to a sentence case string.
 *
 * ```typescript
 * export function PathCaseStringToSentenceCaseString(str: string): string {
 *   const result = str.toLowerCase().replace(/\//g, " ").trim();
 *   return result.charAt(0).toUpperCase() + result.slice(1);
 * }
 * ```
 *
 * @param str - The path case string to convert to sentence case.
 * @returns Returns the sentence case string.
 *
 * @example
 * ```typescript
 * PathCaseStringToSentenceCaseString('path/case/string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PathCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "hello/world";
 *
 * console.log(PathCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function PathCaseStringToSentenceCaseString(str: string): string {
  const result = str.toLowerCase().replace(/\//g, " ").trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
