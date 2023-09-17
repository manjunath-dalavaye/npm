/**
 * Converts a camel case string to a dot case string.
 *
 * ```typescript
 * export function CamelCaseStringToDotCaseString(str: string): string {
 *   return str.replace(/[A-Z]/g, (match) => `.${match.toLowerCase()}`);
 * }
 * ```
 *
 * @param str - The camel case string to convert to dot case.
 * @returns The dot case string.
 *
 * @example
 * ```typescript
 * CamelCaseStringToDotCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function CamelCaseStringToDotCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `.${match.toLowerCase()}`);
}
