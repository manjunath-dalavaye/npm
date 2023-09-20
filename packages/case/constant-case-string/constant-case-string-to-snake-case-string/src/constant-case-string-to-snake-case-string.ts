/**
 * Converts a constant case string to a snake case string.
 *
 * ```typescript
 * export function ConstantCaseStringToSnakeCaseString(str: string): string {
 *   return str.toLowerCase();
 * }
 * ```
 *
 * @param str - The constant case string to convert to snake case.
 * @returns The snake case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToSnakeCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase();
}
