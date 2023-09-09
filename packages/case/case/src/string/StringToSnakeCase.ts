/**
 * Converts a string to a snake case string.
 *
 * ```typescript
 * export function StringToSnakeCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const lowerWords = words.map((word) => word.toLowerCase());
 *   return lowerWords.join("_");
 * }
 * ```
 *
 * @param str - The string to convert to snake case.
 * @returns Returns the snake case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToSnakeCase('string to snake case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToSnakeCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToSnakeCase(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToSnakeCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToSnakeCase(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToSnakeCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("_");
}
