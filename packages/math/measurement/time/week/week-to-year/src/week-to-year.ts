/**
 * Converts the given number of weeks to years.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = WeekToYear(52);
 * ```
 */
export function WeekToYear(weeks: number): number {
  return weeks / 52;
}

export { WeekToYear as WeeksToYears };
