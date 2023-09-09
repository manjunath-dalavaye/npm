/**
 * Converts a title case string to a snake case string.
 *
 * ```typescript
 * export function TitleCaseStringToSnakeCaseString(str: string): string {
 *   return str.replace(/\s+/g, "_").toLowerCase();
 * }
 * ```
 *
 * @param str - The title case string to convert to snake case.
 * @returns Returns the snake case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * TitleCaseStringToSnakeCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function TitleCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/\s+/g, "_").toLowerCase();
}
