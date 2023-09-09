/**
 * Converts a Pascal case string to a constant case string.
 *
 * ```typescript
 * export function PascalCaseStringToConstantCaseString(str: string): string {
 *   if (str === str.toUpperCase()) {
 *     return str;
 *   }
 *   const result = str.replace(/([A-Z])/g, "_$1").toUpperCase();
 *   if (result.startsWith("_")) {
 *     return result.substring(1);
 *   }
 *   return result;
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToConstantCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToConstantCaseString(str: string): string {
  if (str === str.toUpperCase()) {
    return str;
  }
  const result = str.replace(/([A-Z])/g, "_$1").toUpperCase();
  if (result.startsWith("_")) {
    return result.substring(1);
  }
  return result;
}
