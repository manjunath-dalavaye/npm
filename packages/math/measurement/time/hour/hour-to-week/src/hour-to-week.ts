/**
 * Converts hours to weeks.
 *
 * @param hours - The number of hours to convert.
 * @returns The number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = HourToWeek(2);
 * ```
 */
export function HourToWeek(hours: number): number {
  return hours / (24 * 7);
}

export { HourToWeek as HoursToWeeks };
