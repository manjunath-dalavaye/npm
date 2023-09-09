/**
 * Converts a constant case string to a pascal case string.
 *
 * ```typescript
 * export function ConstantCaseStringToPascalCaseString(str: string): string {
 *   if (str.indexOf("_") !== -1) {
 *     return str
 *       .split("_")
 *       .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
 *       .join("");
 *   }
 *   return str;
 * }
 * ```
 *
 * @param str - The constant case string to convert to pascal case.
 * @returns The pascal case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * ConstantCaseStringToPascalCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function ConstantCaseStringToPascalCaseString(str: string): string {
  if (str.indexOf("_") !== -1) {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  }
  return str;
}
