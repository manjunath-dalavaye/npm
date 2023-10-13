/**
 * Converts hours to milliseconds.
 *
 * @param hours - The number of hours to convert.
 * @returns The number of milliseconds equivalent to the given number of hours.
 *
 * @example
 * ```typescript
 * const milliseconds = HourToMillisecond(2);
 * ```
 */
export function HourToMillisecond(hours: number): number {
  return hours * (60 * (60 * 1000));
}

export { HourToMillisecond as HoursToMilliseconds };
