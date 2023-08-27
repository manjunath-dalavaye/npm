/**
 * Converts a decimal number to a binary string.
 *
 * ```typescript
 * export function DecimalToBinary(decimal: number): string {
 *   if (decimal < 0 || !Number.isInteger(decimal)) {
 *     return "";
 *   }
 *   let binary = "";
 *   while (decimal > 0) {
 *     binary = (decimal % 2) + binary;
 *     decimal = Math.floor(decimal / 2);
 *   }
 *   return binary || "0";
 * }
 * ```
 *
 * @param decimal The decimal number to convert.
 * @returns The binary string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * DecimalToBinary(42);
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DecimalToBinary } from "@ilihub/code";
 *
 * const decimal = 128;
 *
 * const binary = DecimalToBinary(decimal);
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
 * import { DecimalToBinary } from "@ilihub/number-system";
 *
 * const decimal = 128;
 *
 * const binary = DecimalToBinary(decimal);
 * console.log(binary);
 *
 * // Output
 * // 10000000
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function DecimalToBinary(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary || "0";
}
