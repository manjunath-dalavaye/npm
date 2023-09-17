/**
 * Converts a camel case string to a kebab case string.
 *
 * ```typescript
 * export function CamelCaseStringToKebabCaseString(str: string): string {
 *   return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
 * }
 * ```
 *
 * @param str - The camel case string to convert to kebab case.
 * @returns The kebab case string.
 *
 * @example
 * ```typescript
 * CamelCaseStringToKebabCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function CamelCaseStringToKebabCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
