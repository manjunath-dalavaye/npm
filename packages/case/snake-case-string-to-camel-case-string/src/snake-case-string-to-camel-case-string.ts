/**
 * Converts a snake case string to a camel case string.
 *
 * ```typescript
 * export function SnakeCaseStringToCamelCaseString(str: string): string {
 *   return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
 * }
 * ```
 *
 * @param str - The snake case string to convert to camel case.
 * @returns Returns the camel case string.
 *
 * @example
 * ```typescript
 * SnakeCaseStringToCamelCaseString('snake_case_string');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToCamelCaseString } from "@ilihub/code";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { SnakeCaseStringToCamelCaseString } from "@ilihub/case";
 *
 * const string = "hello_world";
 *
 * console.log(SnakeCaseStringToCamelCaseString(string));
 *
 * // Output
 * // helloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function SnakeCaseStringToCamelCaseString(str: string): string {
  return str.replace(/_(?<temp1>[a-z])/g, (match: string, letter: string) =>
    letter.toUpperCase(),
  );
}
