/**
 * Converts a constant case string to a camel case string.
 *
 * ```typescript
 * export function ConstantCaseStringToCamelCaseString(str: string): string {
 *   if (str.indexOf("_") !== -1) {
 *     return str
 *       .toLowerCase()
 *       .replace(/_([a-z])/g, (match, char) => char.toUpperCase());
 *   }
 *   return str;
 * }
 * ```
 *
 * @param str - The constant case string to convert to camel case.
 * @returns The camel case string.
 *
 * @example
 * ```typescript
 * ConstantCaseStringToCamelCaseString('CONSTANT_CASE_STRING');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { ConstantCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "HELLO_WORLD";
 *
 * console.log(ConstantCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function ConstantCaseStringToCamelCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .toLowerCase()
      .replace(/_(?<temp1>[a-z])/g, (match: string, char: string) =>
        char.toUpperCase(),
      );
  }
  return str;
}
