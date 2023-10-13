/**
 * Converts the given number of days to minutes.
 *
 * @param days - The number of days to convert to minutes.
 * @returns The equivalent number of minutes.
 *
 * @example
 * ```typescript
 * const minutes = DayToMinute(2);
 * ```
 */
export function DayToMinute(days: number): number {
  return days * 24 * 60;
}

export { DayToMinute as DaysToMinutes };
