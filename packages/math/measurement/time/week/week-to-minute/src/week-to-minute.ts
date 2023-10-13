/**
 * Converts a number of weeks to minutes.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of minutes.
 *
 * @example
 * ```typescript
 * const minutes = WeekToMinute(52);
 * ```
 */
export function WeekToMinute(weeks: number): number {
  return weeks * 7 * 24 * 60;
}

export { WeekToMinute as WeeksToMinutes };
