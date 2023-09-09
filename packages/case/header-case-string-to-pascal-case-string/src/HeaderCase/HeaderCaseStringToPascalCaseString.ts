/**
 * Converts a header case string to a pascal case string.
 *
 * ```typescript
 * export function HeaderCaseStringToPascalCaseString(str: string): string {
 *   if (str.indexOf("-") !== -1) {
 *     return str
 *       .split("-")
 *       .map((word) => {
 *         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
 *       })
 *       .join("");
 *   }
 *   return str;
 * }
 * ```
 *
 * @param str - The header case string to convert to pascal case.
 * @returns The pascal case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * HeaderCaseStringToPascalCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function HeaderCaseStringToPascalCaseString(str: string): string {
  if (str.indexOf("-") !== -1) {
    return str
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return str;
}
