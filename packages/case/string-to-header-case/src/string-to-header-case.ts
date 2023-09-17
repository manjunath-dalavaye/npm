/**
 * Converts a string to a header case string.
 *
 * ```typescript
 * export function StringToHeaderCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const headerWords = words.map(
 *     (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
 *   );
 *   return headerWords.join("-");
 * }
 * ```
 *
 * @param str - The string to convert to header case.
 * @returns Returns the header case string.
 *
 * @example
 * ```typescript
 * StringToHeaderCase('string to header case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToHeaderCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToHeaderCase(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToHeaderCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToHeaderCase(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function StringToHeaderCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const headerWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return headerWords.join("-");
}
