/**
 * Converts a number of decades to seconds.
 *
 * @param decades - The number of decades to convert.
 * @returns The equivalent number of seconds.
 *
 * @example
 * ```typescript
 * const seconds = DecadeToSecond(2);
 * ```
 */
export function DecadeToSecond(decades: number): number {
  return decades * 10 * 365 * 24 * 60 * 60;
}

export { DecadeToSecond as DecadesToSeconds };
