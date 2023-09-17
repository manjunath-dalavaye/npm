/**
 * Converts an ASCII string to an octal string.
 *
 * ```typescript
 * export function AsciiToOctal(ascii: string): string {
 *   let octal = "";
 *   for (let i = 0; i < ascii.length; i++) {
 *     const charCode = ascii.charCodeAt(i);
 *     octal += charCode.toString(8).padStart(3, "0");
 *   }
 *   return octal;
 * }
 * ```
 *
 * @param ascii - The ASCII string to convert.
 * @returns The octal string.
 *
 * @example
 * ```typescript
 * AsciiToOctal("Hello World!");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToOctal } from "@ilihub/code";
 *
 * const ascii = "Hello World";
 *
 * const octal = AsciiToOctal(ascii);
 * console.log(octal);
 *
 * // Output
 * // 110145154154157040127157162154144
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToOctal } from "@ilihub/number-system";
 *
 * const ascii = "Hello World";
 *
 * const octal = AsciiToOctal(ascii);
 * console.log(octal);
 *
 * // Output
 * // 110145154154157040127157162154144
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function AsciiToOctal(ascii: string): string {
  let octal = "";
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    octal += charCode.toString(8).padStart(3, "0");
  }
  return octal;
}
