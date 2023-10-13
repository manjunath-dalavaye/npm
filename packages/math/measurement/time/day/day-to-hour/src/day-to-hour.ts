/**
 * Converts a number of days to hours.
 *
 * @param days - The number of days to convert.
 * @returns The number of hours equivalent to the given number of days.
 *
 * @example
 * ```typescript
 * const hours = DayToHour(2);
 * ```
 */
export function DayToHour(days: number): number {
  return days * 24;
}

export { DayToHour as DaysToHours };
