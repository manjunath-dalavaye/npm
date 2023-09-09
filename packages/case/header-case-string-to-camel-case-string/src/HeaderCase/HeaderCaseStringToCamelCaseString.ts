/**
 * Converts a header case string to a camel case string.
 *
 * ```typescript
 * export function HeaderCaseStringToCamelCaseString(str: string): string {
 *   if (str.indexOf("-") !== -1) {
 *     return str
 *       .split("-")
 *       .map((word, index) => {
 *         if (index === 0) {
 *           return word.toLowerCase();
 *         }
 *         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
 *       })
 *       .join("");
 *   }
 *   return str;
 * }
 * ```
 *
 * @param str - The header case string to convert to camel case.
 * @returns The camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * HeaderCaseStringToCamelCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function HeaderCaseStringToCamelCaseString(str: string): string {
  if (str.indexOf("-") !== -1) {
    return str
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return str;
}
