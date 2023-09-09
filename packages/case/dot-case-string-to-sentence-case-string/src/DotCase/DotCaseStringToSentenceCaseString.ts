/**
 * Converts a dot case string to a sentence case string.
 *
 * ```typescript
 * export function DotCaseStringToSentenceCaseString(str: string): string {
 *   if (str.indexOf(".") !== -1) {
 *     return str
 *       .toLowerCase()
 *       .split(".")
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
 * @param str - The dot case string to convert to sentence case.
 * @returns The sentence case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * DotCaseStringToSentenceCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function DotCaseStringToSentenceCaseString(str: string): string {
  if (str.indexOf(".") !== -1) {
    return str
      .toLowerCase()
      .split(".")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase()
      )
      .join(" ");
  }
  return str;
}
