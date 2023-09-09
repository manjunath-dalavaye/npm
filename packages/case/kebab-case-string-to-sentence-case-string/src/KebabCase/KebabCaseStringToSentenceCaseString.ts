/**
 * Converts a kebab case string to a sentence case string.
 *
 * ```typescript
 * export function KebabCaseStringToSentenceCaseString(str: string): string {
 *   return str.replace(/-/g, " ").replace(/^\w/, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The header case string to convert to sentence case.
 * @returns The sentence case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * KebabCaseStringToSentenceCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function KebabCaseStringToSentenceCaseString(str: string): string {
  return str.replace(/-/g, " ").replace(/^\w/, (match) => match.toUpperCase());
}
