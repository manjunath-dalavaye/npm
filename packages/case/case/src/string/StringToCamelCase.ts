/**
 * Converts a string to camel case.
 *
 * ```typescript
 * export function StringToCamelCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const firstWord = words[0].toLowerCase();
 *   const restWords = words
 *     .slice(1)
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
 *   return firstWord + restWords.join("");
 * }
 * ```
 *
 * @param str - The string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToCamelCase('string to camel case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToCamelCase } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(StringToCamelCase(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToCamelCase } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(StringToCamelCase(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToCamelCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const firstWord = words[0].toLowerCase();
  const restWords = words
    .slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return firstWord + restWords.join("");
}
