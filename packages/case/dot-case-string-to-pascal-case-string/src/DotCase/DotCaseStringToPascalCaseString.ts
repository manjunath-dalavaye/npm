/**
 * Converts a dot case string to a pascal case string.
 *
 * ```typescript
 * export function DotCaseStringToPascalCaseString(str: string): string {
 *   return str
 *     .split(".")
 *     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 *     .join("");
 * }
 * ```
 *
 * @param str - The dot case string to convert to pascal case.
 * @returns The pascal case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * DotCaseStringToPascalCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function DotCaseStringToPascalCaseString(str: string): string {
  return str
    .split(".")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
