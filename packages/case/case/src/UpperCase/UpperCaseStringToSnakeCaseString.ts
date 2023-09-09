/**
 * Converts an upper case string to a snake case string.
 *
 * ```typescript
 * export function UpperCaseStringToSnakeCaseString(str: string): string {
 *   return str.replace(/ /g, "_").toLowerCase();
 * }
 * ```
 *
 * @param str - The upper case string to convert to snake case.
 * @returns Returns the snake case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * UpperCaseStringToSnakeCaseString('UPPER CASE STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { UpperCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "HELLO WORLD";
 *
 * console.log(UpperCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function UpperCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/ /g, "_").toLowerCase();
}
