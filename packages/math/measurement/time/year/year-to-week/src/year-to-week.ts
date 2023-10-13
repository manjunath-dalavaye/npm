/**
 * Converts the given number of years to weeks.
 *
 * @param years - The number of years to convert to weeks.
 * @returns The equivalent number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = YearToWeek(2);
 * ```
 */
export function YearToWeek(years: number): number {
  return years * 52;
}

export { YearToWeek as YearsToWeeks };
