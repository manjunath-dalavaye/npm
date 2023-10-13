/**
 * Converts the given number of weeks to seconds.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of seconds.
 *
 * @example
 * ```typescript
 * const seconds = WeekToSecond(2);
 * ```
 */
export function WeekToSecond(weeks: number): number {
  return weeks * 7 * 24 * 60 * 60;
}

export { WeekToSecond as WeeksToSeconds };
