/**
 * Converts a number of years to hours.
 *
 * @param years - The number of years to convert.
 * @returns The equivalent number of hours.
 *
 * @example
 * ```typescript
 * const hours = YearToHour(2);
 * ```
 */
export function YearToHour(years: number): number {
  return years * 365 * 24;
}

export { YearToHour as YearsToHours };
