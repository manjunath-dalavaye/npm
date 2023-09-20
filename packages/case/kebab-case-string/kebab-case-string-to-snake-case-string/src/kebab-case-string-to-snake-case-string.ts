/**
 * Converts a kebab case string to a snake case string.
 *
 * ```typescript
 * export function KebabCaseStringToSnakeCaseString(str: string): string {
 *   return str.replace(/-/g, "_");
 * }
 * ```
 *
 * @param str - The header case string to convert to snake case.
 * @returns The snake case string.
 *
 * @example
 * ```typescript
 * KebabCaseStringToSnakeCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function KebabCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/-/g, "_");
}
