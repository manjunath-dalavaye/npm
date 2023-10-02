/**
 * Decodes a base64 string to its original string representation.
 *
 * @param base64Str - The base64 string to decode.
 * @returns The original string representation of the base64 string.
 *
 * @example
 * ```typescript
 * const decodedString = Base64ToString('SGVsbG8sIHdvcmxkIQ==');
 * console.log(decodedString); // "Hello, world!"
 * ```
 */
export function Base64ToString(base64Str: string): string {
  return atob(base64Str);
}
