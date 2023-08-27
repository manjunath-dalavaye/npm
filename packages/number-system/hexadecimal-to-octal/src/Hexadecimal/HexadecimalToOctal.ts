/**
 * Converts a hexadecimal string to an octal string.
 *
 * ```typescript
 * export function HexadecimalToOctal(hex: string): string {
 *   if (!/^[0-9A-Fa-f]+$/.test(hex)) {
 *     return "";
 *   }
 *   let decimal = 0;
 *   for (let i = 0; i < hex.length; i++) {
 *     const digit = parseInt(hex[i], 16);
 *     decimal = decimal * 16 + digit;
 *   }
 *   let octal = "";
 *   while (decimal > 0) {
 *     octal = (decimal % 8).toString() + octal;
 *     decimal = Math.floor(decimal / 8);
 *   }
 *   return octal || "0";
 * }
 * ```
 *
 * @param hexadecimal The hexadecimal string to convert.
 * @returns The octal string.
 *
 * @category Number System
 * @group \@ilihub\/number-system
 *
 * @example
 * ```typescript
 * HexadecimalToOctal("80");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToOctal } from "@ilihub/code";
 *
 * const hexadecimal = "80";
 *
 * const octal = HexadecimalToOctal(hexadecimal);
 * console.log(octal);
 *
 * // Output
 * // 200
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { HexadecimalToOctal } from "@ilihub/number-system";
 *
 * const hexadecimal = "80";
 *
 * const octal = HexadecimalToOctal(hexadecimal);
 * console.log(octal);
 *
 * // Output
 * // 200
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/@ilihub/number-system)
 */
export function HexadecimalToOctal(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return "";
  }
  let decimal = 0;
  for (let i = 0; i < hex.length; i++) {
    const digit = parseInt(hex[i], 16);
    decimal = decimal * 16 + digit;
  }
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8).toString() + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal || "0";
}
