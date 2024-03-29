/**
 * Converts a constant case string to a kebab case string.
 *
 * ```typescript
 * export function ConstantCaseStringToKebabCaseString(str: string): string {
 *   return str.toLowerCase().replace(/_/g, "-");
 * }
 * ```
 *
 * @param str - The constant case string to convert to kebab case.
 * @returns The kebab case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToKebabCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, "-");
}
