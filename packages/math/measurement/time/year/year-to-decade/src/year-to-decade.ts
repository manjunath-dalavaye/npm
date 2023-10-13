/**
 * Converts a number of years to decades.
 *
 * @param years - The number of years to convert to decades.
 * @returns The number of decades equivalent to the given number of years.
 *
 * @example
 * ```typescript
 * const decades = YearToDecade(10);
 * ```
 */
export function YearToDecade(years: number): number {
  return years / 10;
}

export { YearToDecade as YearsToDecades };
