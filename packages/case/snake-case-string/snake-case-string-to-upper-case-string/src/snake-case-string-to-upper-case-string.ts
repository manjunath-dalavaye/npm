/**
 * Converts a snake case string to an upper case string.
 *
 * ```typescript
 * export function SnakeCaseStringToUpperCaseString(str: string): string {
 *   return str.toUpperCase().replace(/_/g, " ");
 * }
 * ```
 *
 * @param str - The snake case string to convert to upper case.
 * @returns Returns the upper case string.
 *
 * @example
 * ```typescript
 * SnakeCaseStringToUpperCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToUpperCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToUpperCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToUpperCaseString(string));
 *
 * // Output
 * // HELLO WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SnakeCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/_/g, " ");
}
