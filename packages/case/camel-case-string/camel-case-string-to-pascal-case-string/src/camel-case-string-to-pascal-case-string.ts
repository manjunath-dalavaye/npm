/**
 * Converts a camel case string to a pascal case string.
 *
 * ```typescript
 * export function CamelCaseStringToPascalCaseString(str: string): string {
 *   return str.replace(
 *     /(\w)(\w*)/g,
 *     (match, firstChar, rest) => firstChar.toUpperCase() + rest
 *   );
 * }
 * ```
 *
 * @param str - The camel case string to convert to pascal case.
 * @returns The pascal case string.
 *
 * @example
 * ```typescript
 * CamelCaseStringToPascalCaseString('camelCaseString');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToPascalCaseString } from "@ilihub/code";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { CamelCaseStringToPascalCaseString } from "@ilihub/case";
 *
 * const string = "helloWorld";
 *
 * console.log(CamelCaseStringToPascalCaseString(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function CamelCaseStringToPascalCaseString(str: string): string {
  return str.replace(
    /(?<temp2>\w)(?<temp1>\w*)/g,
    (match: string, firstChar: string, rest: string) =>
      firstChar.toUpperCase() + rest,
  );
}
