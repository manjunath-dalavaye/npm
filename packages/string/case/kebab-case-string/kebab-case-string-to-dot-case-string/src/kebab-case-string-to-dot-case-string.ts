/**
 * Converts a kebab case string to a dot case string.
 *
 * ```typescript
 * export function KebabCaseStringToDotCaseString(str: string): string {
 *   return str.replace(/-/g, ".");
 * }
 * ```
 *
 * @param str - The header case string to convert to dot case.
 * @returns The dot case string.
 *
 * @example
 * ```typescript
 * KebabCaseStringToDotCaseString('kebab-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { KebabCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "hello-world";
 *
 * console.log(KebabCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function KebabCaseStringToDotCaseString(str: string): string {
  return str.replace(/-/g, ".");
}
