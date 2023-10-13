/**
 * Converts days to seconds.
 *
 * @param days - The number of days to convert.
 * @returns The number of seconds equivalent to the given number of days.
 *
 * @example
 * ```typescript
 * const seconds = DayToSecond(2);
 * ```
 */
export function DayToSecond(days: number): number {
  return days * 24 * 60 * 60;
}

export { DayToSecond as DaysToSeconds };
