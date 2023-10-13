/**
 * Converts a number of years to minutes.
 *
 * @param years - The number of years to convert.
 * @returns The equivalent number of minutes.
 *
 * @example
 * ```typescript
 * const minutes = YearToMinute(1);
 * ```
 */
export function YearToMinute(years: number): number {
  return years * 365 * 24 * 60;
}

export { YearToMinute as YearsToMinutes };
