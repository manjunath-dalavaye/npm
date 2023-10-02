/**
 * Encodes a string to base64.
 *
 * @param str - The string to encode.
 * @returns The base64 encoded string.
 *
 * @example
 * ```typescript
 * const encodedString = StringToBase64('Hello, world!');
 * console.log(encodedString); // "SGVsbG8sIHdvcmxkIQ=="
 * ```
 */
export function StringToBase64(str: string): string {
  return btoa(str);
}
