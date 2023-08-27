/**
 * Converts an octal string to a hexadecimal string.
 *
 * ```typescript
 * export function OctalToHexadecimal(octal: string): string {
 *   if (!/^[0-7]+$/.test(octal)) {
 *     return "";
 *   }
 *   let decimal = 0;
 *   for (let i = 0; i < octal.length; i++) {
 *     const digit = parseInt(octal[i], 8);
 *     decimal = decimal * 8 + digit;
 *   }
 *   return decimal.toString(16).toUpperCase();
 * }
 * ```
 *
 * @param octal The octal string to convert.
 * @returns The hexadecimal string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * OctalToHexadecimal("200");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { OctalToHexadecimal } from "@ilihub/code";
 *
 * const octal = "200";
 *
 * const hexadecimal = OctalToHexadecimal(octal);
 * console.log(hexadecimal);
 *
 * // Output
 * // 80
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { OctalToHexadecimal } from "@ilihub/number-system";
 *
 * const octal = "200";
 *
 * const hexadecimal = OctalToHexadecimal(octal);
 * console.log(hexadecimal);
 *
 * // Output
 * // 80
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function OctalToHexadecimal(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    return "";
  }
  let decimal = 0;
  for (let i = 0; i < octal.length; i++) {
    const digit = parseInt(octal[i], 8);
    decimal = decimal * 8 + digit;
  }
  return decimal.toString(16).toUpperCase();
}
