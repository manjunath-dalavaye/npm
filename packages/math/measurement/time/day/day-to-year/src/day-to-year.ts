/**
 * Converts the given number of days to years.
 *
 * @param days - The number of days to convert to years.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = DayToYear(2);
 * ```
 */
export function DayToYear(days: number): number {
  return days / 365;
}

export { DayToYear as DaysToYears };
