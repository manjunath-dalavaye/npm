/**
 * Converts a snake case string to a kebab case string.
 *
 * ```typescript
 * export function SnakeCaseStringToKebabCaseString(str: string): string {
 *   return str.replace(/_/g, "-");
 * }
 * ```
 *
 * @param str - The snake case string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @example
 * ```typescript
 * SnakeCaseStringToKebabCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SnakeCaseStringToKebabCaseString(str: string): string {
  return str.replace(/_/g, "-");
}
