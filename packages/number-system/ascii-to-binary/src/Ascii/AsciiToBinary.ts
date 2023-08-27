/**
 * Converts an ASCII string to a binary string.
 *
 * ```typescript
 * export function AsciiToBinary(ascii: string): string {
 *   let binary = "";
 *   for (let i = 0; i < ascii.length; i++) {
 *     const charCode = ascii.charCodeAt(i);
 *     if (charCode < 0 || charCode > 255) {
 *       return "";
 *     }
 *     binary += charCode.toString(2).padStart(8, "0");
 *   }
 *   return binary;
 * }
 * ```
 *
 * @param ascii The ASCII string to convert.
 * @returns The binary string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * AsciiToBinary("Hello World!");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToBinary } from "@ilihub/code";
 *
 * const ascii = "Hello World";
 *
 * const binary = AsciiToBinary(ascii);
 * console.log(binary);
 *
 * // Output
 * // 0100 1000 0110 0101 0110 1100 0110 1100 0110 1111 0010
 * // 0000 0101 0111 0110 1111 0111 0010 0110 1100 0110 0100
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToBinary } from "@ilihub/number-system";
 *
 * const ascii = "Hello World";
 *
 * const binary = AsciiToBinary(ascii);
 * console.log(binary);
 *
 * // Output
 * // 0100 1000 0110 0101 0110 1100 0110 1100 0110 1111 0010
 * // 0000 0101 0111 0110 1111 0111 0010 0110 1100 0110 0100
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function AsciiToBinary(ascii: string): string {
  let binary = "";
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    if (charCode < 0 || charCode > 255) {
      return "";
    }
    binary += charCode.toString(2).padStart(8, "0");
  }
  return binary;
}
