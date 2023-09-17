/**
 * Converts a binary string to an ASCII string.
 *
 * ```typescript
 * export function BinaryToAscii(binary: string): string {
 *   let ascii = "";
 *   for (let i = 0; i < binary.length; i += 8) {
 *     const byte = binary.slice(i, i + 8);
 *     const charCode = parseInt(byte, 2);
 *     ascii += String.fromCharCode(charCode);
 *   }
 *   return ascii;
 * }
 * ```
 *
 * @param binary - The binary string to convert.
 * @returns The ASCII string.
 *
 * @example
 * ```typescript
 * BinaryToAscii("0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { BinaryToAscii } from "@ilihub/code";
 *
 * const binary =
 *   "0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100";
 *
 * const ascii = BinaryToAscii(binary);
 * console.log(ascii);
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { BinaryToAscii } from "@ilihub/number-system";
 *
 * const binary =
 *   "0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100";
 *
 * const ascii = BinaryToAscii(binary);
 * console.log(ascii);
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function BinaryToAscii(binary: string): string {
  let ascii = "";
  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.slice(i, i + 8);
    const charCode = parseInt(byte, 2);
    ascii += String.fromCharCode(charCode);
  }
  return ascii;
}
