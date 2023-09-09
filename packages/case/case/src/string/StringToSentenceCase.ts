/**
 * Converts a string to a sentence case string.
 *
 * ```typescript
 * export function StringToSentenceCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const sentence = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
 *   return sentence;
 * }
 * ```
 *
 * @param str - The string to convert to sentence case.
 * @returns Returns the sentence case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToSentenceCase('string to sentence case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToSentenceCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToSentenceCase(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToSentenceCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToSentenceCase(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToSentenceCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const sentence = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return sentence;
}
