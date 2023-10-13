/**
 * Converts a number of decades to minutes.
 *
 * @param decades - The number of decades to convert.
 * @returns The equivalent number of minutes.
 *
 * @example
 * ```typescript
 * const minutes = DecadeToMinute(2);
 * ```
 */
export function DecadeToMinute(decades: number): number {
  return decades * 10 * 365 * 24 * 60;
}

export { DecadeToMinute as DecadesToMinutes };
