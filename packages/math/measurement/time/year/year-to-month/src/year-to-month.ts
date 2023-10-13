/**
 * Converts the given number of years to months.
 *
 * @param years - The number of years to convert to months.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = YearToMonth(2);
 * ```
 */
export function YearToMonth(years: number): number {
  return years * 12;
}

export { YearToMonth as YearsToMonths };
