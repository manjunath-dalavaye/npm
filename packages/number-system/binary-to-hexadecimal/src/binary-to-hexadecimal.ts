/**
 * Converts a binary string to a hexadecimal string.
 *
 * ```typescript
 * export function BinaryToHexadecimal(binary: string): string {
 *   if (!/^[01]+$/.test(binary)) {
 *     return "";
 *   }
 *   let hex = "";
 *   let decimal = 0;
 *   let power = 0;
 *   for (let i = binary.length - 1; i >= 0; i--) {
 *     if (binary[i] === "1") {
 *       decimal += Math.pow(2, power);
 *     }
 *     power++;
 *     if (power === 4 || i === 0) {
 *       hex =
 *         (decimal < 10
 *           ? decimal.toString()
 *           : String.fromCharCode(55 + decimal)) + hex;
 *       decimal = 0;
 *       power = 0;
 *     }
 *   }
 *   return hex;
 * }
 * ```
 *
 * @param binary - The binary string to convert.
 * @returns The hexadecimal string.
 *
 * @example
 * ```typescript
 * BinaryToHexadecimal("101010");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { BinaryToHexadecimal } from "@ilihub/code";
 *
 * const binary = "10000000";
 *
 * const hexadecimal = BinaryToHexadecimal(binary);
 * console.log(hexadecimal);
 *
 * // Output
 * // 80
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { BinaryToHexadecimal } from "@ilihub/number-system";
 *
 * const binary = "10000000";
 *
 * const hexadecimal = BinaryToHexadecimal(binary);
 * console.log(hexadecimal);
 *
 * // Output
 * // 80
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function BinaryToHexadecimal(binary: string): string {
  if (!/^[01]+$/.test(binary)) {
    return "";
  }
  let hex = "";
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
    if (power === 4 || i === 0) {
      hex =
        (decimal < 10
          ? decimal.toString()
          : String.fromCharCode(55 + decimal)) + hex;
      decimal = 0;
      power = 0;
    }
  }
  return hex;
}
