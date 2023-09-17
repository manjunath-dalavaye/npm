/**
 * Converts a snake case string to a constant case string.
 *
 * ```typescript
 * export function SnakeCaseStringToConstantCaseString(str: string): string {
 *   return str.toUpperCase();
 * }
 * ```
 *
 * @param str - The snake case string to convert to constant case.
 * @returns Returns the constant case string.
 *
 * @example
 * ```typescript
 * SnakeCaseStringToConstantCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToConstantCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToConstantCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToConstantCaseString(string));
 *
 * // Output
 * // HELLO_WORLD
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SnakeCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase();
}
