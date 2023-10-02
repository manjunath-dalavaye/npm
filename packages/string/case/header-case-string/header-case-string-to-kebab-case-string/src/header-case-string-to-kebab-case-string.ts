/**
 * Converts a header case string to a kebab case string.
 *
 * ```typescript
 * export function HeaderCaseStringToKebabCaseString(str: string): string {
 *   return str.toLowerCase().replace(/-/g, "_").replace(/_/g, "-");
 * }
 * ```
 *
 * @param str - The header case string to convert to kebab case.
 * @returns The kebab case string.
 *
 * @example
 * ```typescript
 * HeaderCaseStringToKebabCaseString('header-case-string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { HeaderCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "Hello-World";
 *
 * console.log(HeaderCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function HeaderCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "_").replace(/_/g, "-");
}
