/**
 * Converts a constant case string to a sentence case string.
 *
 * ```typescript
 * export function ConstantCaseStringToSentenceCaseString(str: string): string {
 *   if (str.indexOf("_") !== -1) {
 *     return str
 *       .toLowerCase()
 *       .split("_")
 *       .map((word, index) =>
 *         index === 0
 *           ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
 *           : word.toLowerCase()
 *       )
 *       .join(" ");
 *   }
 *   return str;
 * }
 * ```
 *
 * @param str - The constant case string to convert to sentence case.
 * @returns The sentence case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToSentenceCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToSentenceCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .toLowerCase()
      .split("_")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase(),
      )
      .join(" ");
  }
  return str;
}
