/**
 * Converts a string to a title case string.
 *
 * ```typescript
 * export function StringToTitleCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const titleWords = words.map(
 *     (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
 *   );
 *   return titleWords.join(" ");
 * }
 * ```
 *
 * @param str - The string to convert to title case.
 * @returns Returns the title case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToTitleCase('string to title case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToTitleCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToTitleCase(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToTitleCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToTitleCase(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToTitleCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const titleWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return titleWords.join(" ");
}
