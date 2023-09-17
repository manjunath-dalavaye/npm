/**
 * Converts a string to constant case.
 *
 * ```typescript
 * export function StringToConstantCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const upperWords = words.map((word) => word.toUpperCase());
 *   return upperWords.join("_");
 * }
 * ```
 *
 * @param str - The string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @example
 * ```typescript
 * StringToConstantCase('string to constant case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToConstantCase } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(StringToConstantCase(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToConstantCase } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(StringToConstantCase(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function StringToConstantCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const upperWords = words.map((word) => word.toUpperCase());
  return upperWords.join("_");
}
