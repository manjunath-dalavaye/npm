/**
 * Converts the given number of weeks to months.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = WeekToMonth(2);
 * ```
 */
export function WeekToMonth(weeks: number): number {
  return weeks / 4;
}

export { WeekToMonth as WeeksToMonths };
