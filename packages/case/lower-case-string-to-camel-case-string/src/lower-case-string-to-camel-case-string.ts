/**
 * Converts a lower case string to a camel case string.
 *
 * ```typescript
 * export function LowerCaseStringToCamelCaseString(str: string): string {
 *   return str.replace(/ ([a-z])/g, (match, group1) => group1.toUpperCase());
 * }
 * ```
 *
 * @param str - The Lower case string to convert to camel case.
 * @returns The camel case string.
 *
 * @example
 * ```typescript
 * LowerCaseStringToCamelCaseString('lower case string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { LowerCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(LowerCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function LowerCaseStringToCamelCaseString(str: string): string {
  return str.replace(/ (?<temp1>[a-z])/g, (match: string, group1: string) =>
    group1.toUpperCase(),
  );
}
