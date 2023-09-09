/**
 * Converts a sentence case string to a kebab case string.
 *
 * ```typescript
 * export function SentenceCaseStringToKebabCaseString(str: string): string {
 *   return str.toLowerCase().replace(/\s+/g, "-");
 * }
 * ```
 *
 * @param str - The sentence case string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * SentenceCaseStringToKebabCaseString('Sentence case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SentenceCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "Hello world";
 *
 * console.log(SentenceCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function SentenceCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}
