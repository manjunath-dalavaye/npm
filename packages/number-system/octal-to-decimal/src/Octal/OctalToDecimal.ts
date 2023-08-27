/**
 * Converts an octal string to a decimal number.
 *
 * ```typescript
 * export function OctalToDecimal(octal: string): number {
 *   if (!/^[0-7]+$/.test(octal)) {
 *     return NaN;
 *   }
 *   let decimal = 0;
 *   for (let i = 0; i < octal.length; i++) {
 *     const digit = parseInt(octal[i], 8);
 *     decimal = decimal * 8 + digit;
 *   }
 *   return decimal;
 * }
 * ```
 *
 * @param octal The octal string to convert.
 * @returns The decimal number.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * OctalToDecimal("200");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { OctalToDecimal } from "@ilihub/code";
 *
 * const octal = "200";
 *
 * const decimal = OctalToDecimal(octal);
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
 * import { OctalToDecimal } from "@ilihub/number-system";
 *
 * const octal = "200";
 *
 * const decimal = OctalToDecimal(octal);
 * console.log(decimal);
 *
 * // Output
 * // 128
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function OctalToDecimal(octal: string): number {
  if (!/^[0-7]+$/.test(octal)) {
    return NaN;
  }
  let decimal = 0;
  for (let i = 0; i < octal.length; i++) {
    const digit = parseInt(octal[i], 8);
    decimal = decimal * 8 + digit;
  }
  return decimal;
}
