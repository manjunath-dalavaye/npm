/**
 * Converts a hexadecimal string to a decimal number.
 *
 * ```typescript
 * export function HexadecimalToDecimal(hex: string): number {
 *   if (!/^[0-9A-Fa-f]+$/.test(hex)) {
 *     return NaN;
 *   }
 *   let decimal = 0;
 *   for (let i = 0; i < hex.length; i++) {
 *     const digit = parseInt(hex[i], 16);
 *     decimal = decimal * 16 + digit;
 *   }
 *   return decimal;
 * }
 * ```
 *
 * @param hexadecimal The hexadecimal string to convert.
 * @returns The decimal number.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * HexadecimalToDecimal("80");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToDecimal } from "@ilihub/code";
 *
 * const hexadecimal = "80";
 *
 * const decimal = HexadecimalToDecimal(hexadecimal);
 * console.log(decimal);
 *
 * // Output
 * // 128
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToDecimal } from "@ilihub/number-system";
 *
 * const hexadecimal = "80";
 *
 * const decimal = HexadecimalToDecimal(hexadecimal);
 * console.log(decimal);
 *
 * // Output
 * // 128
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function HexadecimalToDecimal(hex: string): number {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return NaN;
  }
  let decimal = 0;
  for (let i = 0; i < hex.length; i++) {
    const digit = parseInt(hex[i], 16);
    decimal = decimal * 16 + digit;
  }
  return decimal;
}
