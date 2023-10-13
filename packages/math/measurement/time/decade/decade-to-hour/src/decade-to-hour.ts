/**
 * Converts a number of decades to hours.
 *
 * @param decades - The number of decades to convert.
 * @returns The number of hours equivalent to the given number of decades.
 *
 * @example
 * ```typescript
 * const hours = DecadeToHour(2);
 * ```
 */
export function DecadeToHour(decades: number): number {
  return decades * 10 * 365 * 24;
}

export { DecadeToHour as DecadesToHours };
