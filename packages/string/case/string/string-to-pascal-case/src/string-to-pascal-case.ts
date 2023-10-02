/**
 * Converts a string to a pascal case string.
 *
 * ```typescript
 * export function StringToPascalCase(str: string): string {
 *   if (str.length === 0) {
 *     return "";
 *   }
 *
 *   const words = str.split(/[\s_-]+/);
 *   const pascalWords = words.map(
 *     (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
 *   );
 *   return pascalWords.join("");
 * }
 * ```
 *
 * @param str - The string to convert to pascal case.
 * @returns Returns the pascal case string.
 *
 * @example
 * ```typescript
 * StringToPascalCase('string to pascal case');
 * ```
 *
 * @example
 * This example requires [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * npm package to be installed.
 * ```typescript
 * import { StringToPascalCase } from "@ilihub/code";
 *
 * const string = "hello world";
 *
 * console.log(StringToPascalCase(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @example
 * This example requires [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 * npm package to be installed.
 * ```typescript
 * import { StringToPascalCase } from "@ilihub/case";
 *
 * const string = "hello world";
 *
 * console.log(StringToPascalCase(string));
 *
 * // Output
 * // HelloWorld
 * ```
 *
 * @see [`@ilihub/code`](https://www.npmjs.com/package/\@ilihub/code)
 * @see [`@ilihub/case`](https://www.npmjs.com/package/\@ilihub/case)
 */
export function StringToPascalCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const pascalWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return pascalWords.join("");
}
