/**
 * Converts a snake case string to a header case string.
 *
 * ```typescript
 * export function SnakeCaseStringToHeaderCaseString(str: string): string {
 *   return str
 *     .split("_")
 *     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
 *     .join("-");
 * }
 * ```
 *
 * @param str - The snake case string to convert to header case.
 * @returns Returns the header case string.
 *
 * @example
 * ```typescript
 * SnakeCaseStringToHeaderCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToHeaderCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToHeaderCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToHeaderCaseString(string));
 *
 * // Output
 * // Hello-World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SnakeCaseStringToHeaderCaseString(str: string): string {
  return str
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
