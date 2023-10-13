/**
 * Converts hours to seconds.
 *
 * @param hours - The number of hours to convert.
 * @returns The number of seconds equivalent to the given number of hours.
 *
 * @example
 * ```typescript
 * const seconds = HourToSecond(2);
 * ```
 */
export function HourToSecond(hours: number): number {
  return hours * (60 * 60);
}

export { HourToSecond as HoursToSeconds };
