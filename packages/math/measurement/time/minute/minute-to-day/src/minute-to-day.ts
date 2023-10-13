/**
 * Converts minutes to days.
 *
 * @param minutes - The number of minutes to convert.
 * @returns The number of days equivalent to the given number of minutes.
 *
 * @example
 * ```typescript
 * const days = MinuteToDay(2);
 * ```
 */
export function MinuteToDay(minutes: number): number {
  return minutes / (60 * 24);
}

export { MinuteToDay as MinutesToDays };
