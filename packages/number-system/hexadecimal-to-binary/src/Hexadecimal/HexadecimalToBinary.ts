/**
 * Converts a hexadecimal string to a binary string.
 *
 * ```typescript
 * export function HexadecimalToBinary(hex: string): string {
 *   if (!/^[0-9A-Fa-f]+$/.test(hex)) {
 *     return "";
 *   }
 *   let binary = "";
 *   for (let i = 0; i < hex.length; i++) {
 *     const decimal = parseInt(hex[i], 16);
 *     binary += decimal.toString(2).padStart(4, "0");
 *   }
 *   return binary;
 * }
 * ```
 *
 * @param hexadecimal The hexadecimal string to convert.
 * @returns The binary string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * HexadecimalToBinary("80");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToBinary } from "@ilihub/code";
 *
 * const hexadecimal = "80";
 *
 * const binary = HexadecimalToBinary(hexadecimal);
 * console.log(binary);
 *
 * // Output
 * // 10000000
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToBinary } from "@ilihub/number-system";
 *
 * const hexadecimal = "80";
 *
 * const binary = HexadecimalToBinary(hexadecimal);
 * console.log(binary);
 *
 * // Output
 * // 10000000
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function HexadecimalToBinary(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return "";
  }
  let binary = "";
  for (let i = 0; i < hex.length; i++) {
    const decimal = parseInt(hex[i], 16);
    binary += decimal.toString(2).padStart(4, "0");
  }
  return binary;
}
