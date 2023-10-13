/**
 * Converts a given number of months to weeks.
 *
 * @param months - The number of months to convert to weeks.
 * @returns The equivalent number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = MonthToWeek(2);
 * ```
 */
export function MonthToWeek(months: number): number {
  return months * 4;
}

export { MonthToWeek as MonthsToWeeks };
