/**
 * Converts minutes to hours.
 *
 * @param minutes - The number of minutes to convert.
 * @returns The equivalent number of hours.
 *
 * @example
 * ```typescript
 * const hours = MinuteToHour(2);
 * ```
 */
export function MinuteToHour(minutes: number): number {
  return minutes / 60;
}

export { MinuteToHour as MinutesToHours };
