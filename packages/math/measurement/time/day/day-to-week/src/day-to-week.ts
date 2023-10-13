/**
 * Converts a number of days to weeks.
 *
 * @param day - The number of days to convert to weeks.
 * @returns The number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = DayToWeek(14);
 * ```
 */
export function DayToWeek(day: number): number {
  return day / 7;
}

export { DayToWeek as DaysToWeeks };
