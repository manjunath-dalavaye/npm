/**
 * Converts a kebab case string to a camel case string.
 *
 * ```typescript
 * export function KebabCaseStringToCamelCaseString(str: string): string {
 *   return str.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());
 * }
 * ```
 *
 * @param str - The header case string to convert to camel case.
 * @returns The camel case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * KebabCaseStringToCamelCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function KebabCaseStringToCamelCaseString(str: string): string {
  return str.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());
}
