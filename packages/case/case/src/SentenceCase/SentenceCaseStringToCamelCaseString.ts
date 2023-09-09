/**
 * Converts a sentence case string to a camel case string.
 *
 * ```typescript
 * export function SentenceCaseStringToCamelCaseString(str: string): string {
 *   const result = str.replace(/\s+(.)/g, (_, char) => char.toUpperCase());
 *   return result.charAt(0).toLowerCase() + result.slice(1);
 * }
 * ```
 *
 * @param str - The sentence case string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * SentenceCaseStringToCamelCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function SentenceCaseStringToCamelCaseString(str: string): string {
  const result = str.replace(/\s+(.)/g, (_, char) => char.toUpperCase());
  return result.charAt(0).toLowerCase() + result.slice(1);
}
