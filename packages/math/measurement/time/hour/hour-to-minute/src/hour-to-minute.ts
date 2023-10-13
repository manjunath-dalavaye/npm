/**
 * Converts hours to minutes.
 *
 * @param hours - The number of hours to convert.
 * @returns The number of minutes equivalent to the given hours.
 *
 * @example
 * ```typescript
 * const minutes = HourToMinute(2);
 * ```
 */
export function HourToMinute(hours: number): number {
  return hours * 60;
}

export { HourToMinute as HoursToMinutes };
