/**
 * Converts a camel case string to a title case string.
 *
 * ```typescript
 * export function CamelCaseStringToTitleCaseString(str: string): string {
 *   return str
 *     .replace(/([a-z])([A-Z])/g, "$1 $2")
 *     .replace(/\b\w/g, (match) => match.toUpperCase());
 * }
 * ```
 *
 * @param str - The camel case string to convert to title case.
 * @returns The title case string.
 *
 * @example
 * ```typescript
 * CamelCaseStringToTitleCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToTitleCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToTitleCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToTitleCaseString(string));
 *
 * // Output
 * // Hello World
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function CamelCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
