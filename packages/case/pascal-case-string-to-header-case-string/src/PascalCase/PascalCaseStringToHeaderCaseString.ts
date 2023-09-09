/**
 * Converts a Pascal case string to a header case string.
 *
 * ```typescript
 * export function PascalCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .replace(/([A-Z])/g, "-$1")
 *     .replace(/^-/, "")
 *     .split("-")
 *     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
 *     .join("-")
 *     .replace(/--/g, "-");
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to header case.
 * @returns Returns the header case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToHeaderCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join("-")
    .replace(/--/g, "-");
}
