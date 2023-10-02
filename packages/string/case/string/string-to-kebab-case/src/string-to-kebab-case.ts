/**
 * Converts a string to kebab case.
 *
 * ```typescript
 * export function StringToKebabCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const lowerWords = words.map((word) => word.toLowerCase());
 *   return lowerWords.join("-");
 * }
 * ```
 *
 * @param str - The string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @example
 * ```typescript
 * StringToKebabCase('string to kebab case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToKebabCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToKebabCase(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToKebabCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToKebabCase(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function StringToKebabCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("-");
}
