/**
 * Converts a Pascal case string to a sentence case string.
 *
 * ```typescript
 * export function PascalCaseStringToSentenceCaseString(str: string): string {
 *   return str
 *     .replace(/([A-Z])/g, " $1")
 *     .trim()
 *     .toLowerCase()
 *     .replace(/^\w/, (c) => c.toUpperCase());
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to sentence case.
 * @returns Returns the sentence case string.
 *
 * @example
 * ```typescript
 * PascalCaseStringToSentenceCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function PascalCaseStringToSentenceCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}
