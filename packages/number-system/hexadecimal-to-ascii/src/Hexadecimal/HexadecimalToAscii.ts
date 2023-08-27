/**
 * Converts a hexadecimal string to an ASCII string.
 *
 * ```typescript
 * export function HexadecimalToAscii(hexadecimal: string): string {
 *   let ascii = "";
 *   for (let i = 0; i < hexadecimal.length; i += 2) {
 *     const byte = hexadecimal.slice(i, i + 2);
 *     const charCode = parseInt(byte, 16);
 *     ascii += String.fromCharCode(charCode);
 *   }
 *   return ascii;
 * }
 * ```
 *
 * @param hexadecimal The hexadecimal string to convert.
 * @returns The ASCII string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * HexadecimalToAscii("48656C6C6F20576F726C64");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToAscii } from "@ilihub/code";
 *
 * const hexadecimal = "48656C6C6F20576F726C64";
 *
 * const ascii = HexadecimalToAscii(hexadecimal);
 * console.log(ascii);
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToAscii } from "@ilihub/number-system";
 *
 * const hexadecimal = "48656C6C6F20576F726C64";
 *
 * const ascii = HexadecimalToAscii(hexadecimal);
 * console.log(ascii);
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function HexadecimalToAscii(hexadecimal: string): string {
  let ascii = "";
  for (let i = 0; i < hexadecimal.length; i += 2) {
    const byte = hexadecimal.slice(i, i + 2);
    const charCode = parseInt(byte, 16);
    ascii += String.fromCharCode(charCode);
  }
  return ascii;
}
