/**
 * Converts a binary string to a decimal number.
 *
 * ```typescript
 * export function BinaryToDecimal(binary: string): number {
 *   if (!/^[01]+$/.test(binary)) {
 *     return NaN;
 *   }
 *   let decimal = 0;
 *   let power = 0;
 *   for (let i = binary.length - 1; i >= 0; i--) {
 *     if (binary[i] === "1") {
 *       decimal += Math.pow(2, power);
 *     }
 *     power++;
 *   }
 *   return decimal;
 * }
 * ```
 *
 * @param binary The binary string to convert.
 * @returns The decimal number.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * BinaryToDecimal("101010");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { BinaryToDecimal } from "@ilihub/code";
 *
 * const binary = "10000000";
 *
 * const decimal = BinaryToDecimal(binary);
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
 * import { BinaryToDecimal } from "@ilihub/number-system";
 *
 * const binary = "10000000";
 *
 * const decimal = BinaryToDecimal(binary);
 * console.log(decimal);
 *
 * // Output
 * // 128
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function BinaryToDecimal(binary: string): number {
  if (!/^[01]+$/.test(binary)) {
    return NaN;
  }
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  return decimal;
}
