/**
 * Converts the given number of weeks to hours.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of hours.
 *
 * @example
 * ```typescript
 * const hours = WeekToHour(2);
 * ```
 */
export function WeekToHour(weeks: number): number {
  return weeks * 7 * 24;
}

export { WeekToHour as WeeksToHours };
