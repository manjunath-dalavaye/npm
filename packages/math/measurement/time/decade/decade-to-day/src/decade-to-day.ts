/**
 * Converts a number of decades to the equivalent number of days.
 *
 * @param decades - The number of decades to convert.
 * @returns The equivalent number of days.
 *
 * @example
 * ```typescript
 * const days = DecadeToDay(2);
 * ```
 */
export function DecadeToDay(decades: number): number {
  return decades * 10 * 365;
}

export { DecadeToDay as DecadesToDays };
