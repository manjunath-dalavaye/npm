/**
 * Converts minutes to weeks.
 *
 * @param minutes - The number of minutes to convert.
 * @returns The number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = MinuteToWeek(2);
 * ```
 */
export function MinuteToWeek(minutes: number): number {
  return minutes / (60 * 24 * 7);
}

export { MinuteToWeek as MinutesToWeeks };
