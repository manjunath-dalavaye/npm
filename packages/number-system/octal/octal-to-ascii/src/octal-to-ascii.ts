/**
 * Converts an octal string to an ASCII string.
 *
 * ```typescript
 * export function OctalToAscii(octal: string): string {
 *   let ascii = "";
 *   for (let i = 0; i < octal.length; i += 3) {
 *     const byte = octal.slice(i, i + 3);
 *     const charCode = parseInt(byte, 8);
 *     ascii += String.fromCharCode(charCode);
 *   }
 *   return ascii;
 * }
 * ```
 *
 * @param octal - The octal string to convert.
 * @returns The ASCII string.
 *
 * @example
 * ```typescript
 * OctalToAscii("110");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { OctalToAscii } from "@ilihub/code";
 *
 * const octal = "110";
 *
 * const ascii = OctalToAscii(octal);
 * console.log(ascii);
 *
 * // Output
 * // H
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { OctalToAscii } from "@ilihub/number-system";
 *
 * const octal = "110";
 *
 * const ascii = OctalToAscii(octal);
 * console.log(ascii);
 *
 * // Output
 * // H
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function OctalToAscii(octal: string): string {
  let ascii = "";
  for (let i = 0; i < octal.length; i += 3) {
    const byte = octal.slice(i, i + 3);
    const charCode = parseInt(byte, 8);
    ascii += String.fromCharCode(charCode);
  }
  return ascii;
}
