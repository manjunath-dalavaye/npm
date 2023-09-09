/**
 * Converts a camel case string to a snake case string.
 *
 * ```typescript
 * export function CamelCaseStringToSnakeCaseString(str: string): string {
 *   return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
 * }
 * ```
 *
 * @param str - The camel case string to convert to snake case.
 * @returns The snake case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * CamelCaseStringToSnakeCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToSnakeCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToSnakeCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToSnakeCaseString(string));
 *
 * // Output
 * // hello_world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function CamelCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}
