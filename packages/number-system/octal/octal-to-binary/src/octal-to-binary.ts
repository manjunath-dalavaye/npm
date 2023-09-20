/**
 * Converts an octal string to a binary string.
 *
 * ```typescript
 * export function OctalToBinary(octal: string): string {
 *   if (!/^[0-7]+$/.test(octal)) {
 *     return "";
 *   }
 *   let binary = "";
 *   for (let i = 0; i < octal.length; i++) {
 *     const decimal = parseInt(octal[i], 8);
 *     binary += decimal.toString(2).padStart(3, "0");
 *   }
 *   return binary;
 * }
 * ```
 *
 * @param octal - The octal string to convert.
 * @returns The binary string.
 *
 * @example
 * ```typescript
 * OctalToBinary("200");
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { OctalToBinary } from "@ilihub/code";
 *
 * const octal = "200";
 *
 * const binary = OctalToBinary(octal);
 * console.log(binary);
 *
 * // Output
 * // 10000000
 * ```
 *
 * @example
 * This example requires [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 * npm package to be installed.
 * ```typescript
 * import { OctalToBinary } from "@ilihub/number-system";
 *
 * const octal = "200";
 *
 * const binary = OctalToBinary(octal);
 * console.log(binary);
 *
 * // Output
 * // 10000000
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/number-system`](https://www.npmjs.com/package/\@ilihub/number-system)
 */
export function OctalToBinary(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    return "";
  }
  let binary = "";
  for (const digit of octal) {
    const decimal = parseInt(digit, 8);
    binary += decimal.toString(2).padStart(3, "0");
  }
  return binary;
}
