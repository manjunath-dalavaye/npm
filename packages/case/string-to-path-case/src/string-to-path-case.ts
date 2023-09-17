/**
 * Converts a string to a path case string.
 *
 * ```typescript
 * export function StringToPathCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const lowerWords = words.map((word) => word.toLowerCase());
 *   return lowerWords.join("/");
 * }
 * ```
 *
 * @param str - The string to convert to path case.
 * @returns Returns the path case string.
 *
 * @example
 * ```typescript
 * StringToPathCase('string to path case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToPathCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToPathCase(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToPathCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToPathCase(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function StringToPathCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("/");
}
