/**
 * Converts a string to a dot case string.
 *
 * ```typescript
 * export function StringToDotCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const lowerWords = words.map((word) => word.toLowerCase());
 *   return lowerWords.join(".");
 * }
 * ```
 *
 * @param str - The string to convert to dot case.
 * @returns Returns the dot case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToDotCase('string to dot case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToDotCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToDotCase(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToDotCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToDotCase(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToDotCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join(".");
}
