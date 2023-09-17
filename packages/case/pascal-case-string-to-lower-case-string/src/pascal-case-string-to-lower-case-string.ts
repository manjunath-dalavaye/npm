/**
 * Converts a Pascal case string to a lower case string.
 *
 * ```typescript
 * export function PascalCaseStringToLowerCaseString(str: string): string {
 *   return str
 *     .replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`)
 *     .trim()
 *     .toLowerCase();
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to lower case.
 * @returns Returns the lower case string.
 *
 * @example
 * ```typescript
 * PascalCaseStringToLowerCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToLowerCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToLowerCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToLowerCaseString(string));
 *
 * // Output
 * // hello world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function PascalCaseStringToLowerCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .toLowerCase();
}
