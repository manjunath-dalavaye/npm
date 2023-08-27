/**
 * Converts a decimal number to a hexadecimal string.
 *
 * ```typescript
 * export function DecimalToHexadecimal(decimal: number): string {
 *   if (decimal < 0 || !Number.isInteger(decimal)) {
 *     return "";
 *   }
 *   let hex = "";
 *   while (decimal > 0) {
 *     const remainder = decimal % 16;
 *     hex =
 *       (remainder < 10
 *         ? remainder.toString()
 *         : String.fromCharCode(55 + remainder)) + hex;
 *     decimal = Math.floor(decimal / 16);
 *   }
 *   return hex || "0";
 * }
 * ```
 *
 * @param decimal The decimal number to convert.
 * @returns The hexadecimal string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * DecimalToHexadecimal(42);
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToHexadecimal } from "@ilihub/code";
 *
 * const decimal = 128;
 *
 * const hexadecimal = DecimalToHexadecimal(decimal);
 * console.log(hexadecimal);
 *
 * // Output
 * // 80
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToHexadecimal } from "@ilihub/number-system";
 *
 * const decimal = 128;
 *
 * const hexadecimal = DecimalToHexadecimal(decimal);
 * console.log(hexadecimal);
 *
 * // Output
 * // 80
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function DecimalToHexadecimal(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let hex = "";
  while (decimal > 0) {
    const remainder = decimal % 16;
    hex =
      (remainder < 10
        ? remainder.toString()
        : String.fromCharCode(55 + remainder)) + hex;
    decimal = Math.floor(decimal / 16);
  }
  return hex || "0";
}
