/**
 * Converts a dot case string to a path case string.
 *
 * ```typescript
 * export function DotCaseStringToPathCaseString(str: string): string {
 *   return str.replace(/\./g, "/");
 * }
 * ```
 *
 * @param str - The dot case string to convert to path case.
 * @returns The path case string.
 *
 * @example
 * ```typescript
 * DotCaseStringToPathCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function DotCaseStringToPathCaseString(str: string): string {
  return str.replace(/\./g, "/");
}
