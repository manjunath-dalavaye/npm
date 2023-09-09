/**
 * Converts a Pascal case string to a dot case string.
 *
 * ```typescript
 * export function PascalCaseStringToDotCaseString(str: string): string {
 *   const result = str.replace(/([A-Z])/g, ".$1").toLowerCase();
 *   if (result.startsWith(".")) {
 *     return result.substring(1);
 *   }
 *   return result;
 * }
 * ```
 *
 * @param str - The Pascal case string to convert to dot case.
 * @returns Returns the dot case string.
 *
 * @category String Case Conversion
 * @group \@ilihub\/case
 *
 * @example
 * ```typescript
 * PascalCaseStringToDotCaseString('PascalCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToDotCaseString } from "@ilihub/code";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { PascalCaseStringToDotCaseString } from "@ilihub/case";
 *
 * const string = "HelloWorld";
 *
 * console.log(PascalCaseStringToDotCaseString(string));
 *
 * // Output
 * // hello.world
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/@ilihub/case)
 */
export function PascalCaseStringToDotCaseString(str: string): string {
  const result = str.replace(/([A-Z])/g, ".$1").toLowerCase();
  if (result.startsWith(".")) {
    return result.substring(1);
  }
  return result;
}
