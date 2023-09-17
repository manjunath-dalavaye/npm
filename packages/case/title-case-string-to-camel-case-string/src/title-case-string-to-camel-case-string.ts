/**
 * Converts a title case string to a camel case string.
 *
 * ```typescript
 * export function TitleCaseStringToCamelCaseString(str: string): string {
 *   return str.charAt(0).toLowerCase() + str.slice(1).replace(/\s+/g, "");
 * }
 * ```
 *
 * @param str - The title case string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @example
 * ```typescript
 * TitleCaseStringToCamelCaseString('Title Case String');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { TitleCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "Hello World";
 *
 * console.log(TitleCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function TitleCaseStringToCamelCaseString(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/\s+/g, "");
}
