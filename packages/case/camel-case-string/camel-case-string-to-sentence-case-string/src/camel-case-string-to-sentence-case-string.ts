/**
 * Converts a camel case string to a sentence case string.
 *
 * ```typescript
 * export function CamelCaseStringToSentenceCaseString(str: string): string {
 *   const result = str
 *     .replace(/([A-Z])/g, " $1")
 *     .toLowerCase()
 *     .trim();
 *   return result.charAt(0).toUpperCase() + result.slice(1);
 * }
 * ```
 *
 * @param str - The camel case string to convert to sentence case.
 * @returns The sentence case string.
 *
 * @example
 * ```typescript
 * CamelCaseStringToSentenceCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function CamelCaseStringToSentenceCaseString(str: string): string {
  const result = str
    .replace(/(?<temp1>[A-Z])/g, " $1")
    .toLowerCase()
    .trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
