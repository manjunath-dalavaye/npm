/**
 * Converts an ASCII string to a decimal string.
 *
 * ```typescript
 * export function AsciiToDecimal(ascii: string): number[] {
 *   const decimalArray: number[] = [];
 *   for (let i = 0; i < ascii.length; i++) {
 *     const charCode = ascii.charCodeAt(i);
 *     decimalArray.push(charCode);
 *   }
 *   return decimalArray;
 * }
 * ```
 *
 * @param ascii The ASCII string to convert.
 * @returns An array of decimal numbers.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * AsciiToDecimal("Hello World!");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToDecimal } from "@ilihub/code";
 *
 * const ascii = "Hello World";
 *
 * const decimal = AsciiToDecimal(ascii);
 * console.log(decimal);
 *
 * // Output
 * // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { AsciiToDecimal } from "@ilihub/number-system";
 *
 * const ascii = "Hello World";
 *
 * const decimal = AsciiToDecimal(ascii);
 * console.log(decimal);
 *
 * // Output
 * // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function AsciiToDecimal(ascii: string): number[] {
  const decimalArray: number[] = [];
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    decimalArray.push(charCode);
  }
  return decimalArray;
}
