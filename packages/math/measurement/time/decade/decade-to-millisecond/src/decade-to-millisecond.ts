/**
 * Converts decades to milliseconds.
 *
 * @param decades - The number of decades to convert.
 * @returns The equivalent number of milliseconds.
 *
 * @example
 * ```typescript
 * const milliseconds = DecadeToMillisecond(2);
 * ```
 */
export function DecadeToMillisecond(decades: number): number {
  return decades * 10 * 365 * 24 * 60 * 60 * 1000;
}

export { DecadeToMillisecond as DecadesToMilliseconds };
