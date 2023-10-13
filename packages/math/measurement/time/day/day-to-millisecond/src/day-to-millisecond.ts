/**
 * Converts the given number of days to milliseconds.
 *
 * @param days - The number of days to convert.
 * @returns The equivalent number of milliseconds.
 *
 * @example
 * ```typescript
 * const milliseconds = DayToMillisecond(2);
 * ```
 */
export function DayToMillisecond(days: number): number {
  return days * 24 * 60 * 60 * 1000;
}

export { DayToMillisecond as DaysToMilliseconds };
