/**
 * Converts a Pascal case string to a path case string.
 *
 * ```typescript
 * export function PascalCaseStringToPathCaseString(str: string): string {
 *   return str
 *     .replace(/([A-Z])/g, "/$1")
 *     .toLowerCase()
 *     .replace(/^\//, "");
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to path case.
 * @returns Returns the path case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToPathCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToPathCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToPathCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToPathCaseString(string));
 *
 * // Output
 * // hello/world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToPathCaseString(str: string): string {
  return str
    .replace(/([A-Z])/g, "/$1")
    .toLowerCase()
    .replace(/^\//, "");
}
