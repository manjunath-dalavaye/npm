/**
 * Converts a binary string to an octal string.
 *
 * ```typescript
 * export function BinaryToOctal(binary: string): string {
 *   if (!/^[01]+$/.test(binary)) {
 *     return "";
 *   }
 *   let octal = "";
 *   let decimal = 0;
 *   let power = 0;
 *   for (let i = binary.length - 1; i >= 0; i--) {
 *     if (binary[i] === "1") {
 *       decimal += Math.pow(2, power);
 *     }
 *     power++;
 *     if (power === 3 || i === 0) {
 *       octal = decimal.toString() + octal;
 *       decimal = 0;
 *       power = 0;
 *     }
 *   }
 *   return octal;
 * }
 * ```
 *
 * @param binary The binary string to convert.
 * @returns The octal string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * BinaryToOctal("101010");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { BinaryToOctal } from "@ilihub/code";
 *
 * const binary = "10000000";
 *
 * const octal = BinaryToOctal(binary);
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
 * import { BinaryToOctal } from "@ilihub/number-system";
 *
 * const binary = "10000000";
 *
 * const octal = BinaryToOctal(binary);
 * console.log(octal);
 *
 * // Output
 * // 200
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function BinaryToOctal(binary: string): string {
  if (!/^[01]+$/.test(binary)) {
    return "";
  }
  let octal = "";
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
    if (power === 3 || i === 0) {
      octal = decimal.toString() + octal;
      decimal = 0;
      power = 0;
    }
  }
  return octal;
}
