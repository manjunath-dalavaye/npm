/**
 * Converts a dot case string to a kebab case string.
 *
 * ```typescript
 * export function DotCaseStringToKebabCaseString(str: string): string {
 *   return str.replace(/\./g, "-");
 * }
 * ```
 *
 * @param str - The dot case string to convert to kebab case.
 * @returns The kebab case string.
 *
 * @example
 * ```typescript
 * DotCaseStringToKebabCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function DotCaseStringToKebabCaseString(str: string): string {
  return str.replace(/\./g, "-");
}
