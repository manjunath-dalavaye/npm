/**
 * Converts a dot case string to a camel case string.
 *
 * ```typescript
 * export function DotCaseStringToCamelCaseString(str: string): string {
 *   return str.replace(/\.(\w)/g, (match, char) => char.toUpperCase());
 * }
 * ```
 *
 * @param str - The dot case string to convert to camel case.
 * @returns The camel case string.
 *
 * @example
 * ```typescript
 * DotCaseStringToCamelCaseString('dot.case.string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { DotCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "hello.world";
 *
 * console.log(DotCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function DotCaseStringToCamelCaseString(str: string): string {
  return str.replace(/\.(?<temp1>\w)/g, (match: string, char: string) =>
    char.toUpperCase(),
  );
}
