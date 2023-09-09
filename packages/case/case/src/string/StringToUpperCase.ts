/**
 * Converts a string to an upper case string.
 *
 * ```typescript
 * export function StringToUpperCase(str: string): string {
 *   return str.toUpperCase();
 * }
 * ```
 *
 * @param str - The string to convert to upper case.
 * @returns Returns the upper case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToUpperCase('string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToUpperCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToUpperCase(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToUpperCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToUpperCase(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToUpperCase(str: string): string {
  return str.toUpperCase();
}
