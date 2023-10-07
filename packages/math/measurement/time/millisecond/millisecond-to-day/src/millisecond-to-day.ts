/**
 * Converts milliseconds to days.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of days.
 *
 * @example
 * ```typescript
 * MillisecondToDay(86400000); // returns 1
 * ```
 */
export function MillisecondToDay(milliseconds: number): number {
  const days = milliseconds / (1000 * 60 * 60 * 24);
  return days;
}

export { MillisecondToDay as MillisecondsToDays };
