/**
 * Converts a dot case string to a snake case string.
 *
 * ```typescript
 * export function DotCaseStringToSnakeCaseString(str: string): string {
 *   return str.toLowerCase().replace(/\./g, "_");
 * }
 * ```
 *
 * @param str - The dot case string to convert to snake case.
 * @returns The snake case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * DotCaseStringToSnakeCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function DotCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\./g, "_");
}
