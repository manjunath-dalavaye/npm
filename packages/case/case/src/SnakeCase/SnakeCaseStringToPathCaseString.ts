/**
 * Converts a snake case string to a path case string.
 *
 * ```typescript
 * export function SnakeCaseStringToPathCaseString(str: string): string {
 *   return str.replace(/_/g, "/");
 * }
 * ```
 *
 * @param str - The snake case string to convert to path case.
 * @returns Returns the path case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * SnakeCaseStringToPathCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function SnakeCaseStringToPathCaseString(str: string): string {
  return str.replace(/_/g, "/");
}
