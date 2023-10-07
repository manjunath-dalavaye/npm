/**
 * Converts milliseconds to weeks.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of weeks.
 *
 * @example
 * ```typescript
 * MillisecondToWeek(604800000); // returns 1
 * ```
 */
export function MillisecondToWeek(milliseconds: number): number {
  const weeks = milliseconds / (1000 * 60 * 60 * 24 * 7);
  return weeks;
}

export { MillisecondToWeek as MillisecondsToWeeks };
