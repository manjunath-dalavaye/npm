/**
 * Converts a decimal number to an ASCII string.
 *
 * ```typescript
 * export function DecimalToAscii(decimal: number): string {
 *   if (decimal < 0 || decimal > 255) {
 *     return "";
 *   }
 *   return String.fromCharCode(decimal);
 * }
 * ```
 *
 * @param decimal - The decimal number to convert.
 * @returns The ASCII string.
 *
 * @example
 * ```typescript
 * DecimalToAscii(72);
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToAscii } from "@ilihub/code";
 *
 * const decimal = 72;
 *
 * const ascii = DecimalToAscii(decimal);
 * console.log(ascii);
 *
 * // Output
 * // H
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToAscii } from "@ilihub/number-system";
 *
 * const decimal = 72;
 *
 * const ascii = DecimalToAscii(decimal);
 * console.log(ascii);
 *
 * // Output
 * // H
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function DecimalToAscii(decimal: number): string {
  if (decimal < 0 || decimal > 255) {
    return "";
  }
  return String.fromCharCode(decimal);
}
