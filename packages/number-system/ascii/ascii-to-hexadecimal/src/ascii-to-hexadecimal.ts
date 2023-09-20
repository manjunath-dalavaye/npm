/**
 * Converts an ASCII string to a hexadecimal string.
 *
 * ```typescript
 * export function AsciiToHexadecimal(ascii: string): string {
 *   let hexadecimal = "";
 *   for (let i = 0; i < ascii.length; i++) {
 *     const charCode = ascii.charCodeAt(i);
 *     hexadecimal += charCode.toString(16).padStart(2, "0");
 *   }
 *   return hexadecimal.toUpperCase();
 * }
 * ```
 *
 * @param ascii - The ASCII string to convert.
 * @returns The hexadecimal string.
 *
 * @example
 * ```typescript
 * AsciiToHexadecimal("Hello World!");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToHexadecimal } from "@ilihub/code";
 *
 * const ascii = "Hello World";
 *
 * const hexadecimal = AsciiToHexadecimal(ascii);
 * console.log(hexadecimal);
 *
 * // Output
 * // 48656C6C6F20576F726C64
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToHexadecimal } from "@ilihub/number-system";
 *
 * const ascii = "Hello World";
 *
 * const hexadecimal = AsciiToHexadecimal(ascii);
 * console.log(hexadecimal);
 *
 * // Output
 * // 48656C6C6F20576F726C64
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function AsciiToHexadecimal(ascii: string): string {
  let hexadecimal = "";
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    hexadecimal += charCode.toString(16).padStart(2, "0");
  }
  return hexadecimal.toUpperCase();
}
