/**
 * Converts the given number of weeks to milliseconds.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of milliseconds.
 *
 * @example
 * ```typescript
 * const milliseconds = WeekToMillisecond(2);
 * ```
 */
export function WeekToMillisecond(weeks: number): number {
  return weeks * 7 * 24 * 60 * 60 * 1000;
}

export { WeekToMillisecond as WeeksToMilliseconds };
