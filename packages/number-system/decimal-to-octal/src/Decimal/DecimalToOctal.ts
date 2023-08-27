/**
 * Converts a decimal number to an octal string.
 *
 * ```typescript
 * export function DecimalToOctal(decimal: number): string {
 *   if (decimal < 0 || !Number.isInteger(decimal)) {
 *     return "";
 *   }
 *   let octal = "";
 *   while (decimal > 0) {
 *     octal = (decimal % 8).toString() + octal;
 *     decimal = Math.floor(decimal / 8);
 *   }
 *   return octal || "0";
 * }
 * ```
 *
 * @param decimal The decimal number to convert.
 * @returns The octal string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * DecimalToOctal(42);
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToOctal } from "@ilihub/code";
 *
 * const decimal = 128;
 *
 * const octal = DecimalToOctal(decimal);
 * console.log(octal);
 *
 * // Output
 * // 200
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToOctal } from "@ilihub/number-system";
 *
 * const decimal = 128;
 *
 * const octal = DecimalToOctal(decimal);
 * console.log(octal);
 *
 * // Output
 * // 200
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function DecimalToOctal(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8).toString() + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal || "0";
}
