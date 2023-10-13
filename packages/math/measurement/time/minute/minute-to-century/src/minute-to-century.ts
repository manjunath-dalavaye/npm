/**
 * Converts minutes to centuries.
 *
 * @param minutes - The number of minutes to be converted.
 * @returns The equivalent number of centuries.
 *
 * @example
 * ```typescript
 * const centuries = MinuteToCentury(2);
 * ```
 */
export function MinuteToCentury(minutes: number): number {
  return minutes / (60 * 24 * 365 * 100);
}

export { MinuteToCentury as MinutesToCenturies };
