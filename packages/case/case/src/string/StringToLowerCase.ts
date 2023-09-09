/**
 * Converts a string to a lower case string.
 *
 * ```typescript
 * export function StringToLowerCase(str: string): string {
 *   return str.toLowerCase();
 * }
 * ```
 *
 * @param str - The string to convert to lower case.
 * @returns Returns the lower case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * StringToLowerCase('string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToLowerCase } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(StringToLowerCase(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToLowerCase } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(StringToLowerCase(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function StringToLowerCase(str: string): string {
  return str.toLowerCase();
}
