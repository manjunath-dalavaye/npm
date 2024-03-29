/**
 * Converts a Pascal case string to a kebab case string.
 *
 * ```typescript
 * export function PascalCaseStringToKebabCaseString(str: string): string {
 *   return str
 *     .replace(/([A-Z])/g, "-$1")
 *     .toLowerCase()
 *     .replace(/^-/, "");
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to kebab case.
 * @returns Returns the kebab case string.
 *
 * @example
 * ```typescript
 * PascalCaseStringToKebabCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToKebabCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToKebabCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToKebabCaseString(string));
 *
 * // Output
 * // hello-world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function PascalCaseStringToKebabCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}
