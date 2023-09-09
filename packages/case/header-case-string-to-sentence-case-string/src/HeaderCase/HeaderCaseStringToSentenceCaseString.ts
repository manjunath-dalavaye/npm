/**
 * Converts a header case string to a sentence case string.
 *
 * ```typescript
 * export function HeaderCaseStringToSentenceCaseString(str: string): string {
 *   if (str.indexOf("-") !== -1) {
 *     return str
 *       .split("-")
 *       .map((word, index) => {
 *         if (index === 0) {
 *           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
 *         }
 *         return word.toLowerCase();
 *       })
 *       .join(" ");
 *   }
 *   return str;
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
 * HeaderCaseStringToSentenceCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToSentenceCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToSentenceCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToSentenceCaseString(string));
 *
 * // Output
 * // Hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function HeaderCaseStringToSentenceCaseString(str: string): string {
  if (str.indexOf("-") !== -1) {
    return str
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
      })
      .join(" ");
  }
  return str;
}
