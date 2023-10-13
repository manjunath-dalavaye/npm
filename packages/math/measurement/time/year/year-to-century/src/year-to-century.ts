/**
 * Converts a given year to century.
 *
 * @param years - The year to be converted to century.
 * @returns The century corresponding to the given year.
 *
 * @example
 * ```typescript
 * const century = YearToCentury(1);
 * ```
 */
export function YearToCentury(years: number): number {
  return years / 100;
}

export { YearToCentury as YearsToCenturies };
