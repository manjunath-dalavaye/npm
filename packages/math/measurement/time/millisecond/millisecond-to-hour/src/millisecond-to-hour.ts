/**
 * Converts milliseconds to hours.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of hours.
 *
 * @example
 * ```typescript
 * MillisecondToHour(3600000); // returns 1
 * ```
 */
export function MillisecondToHour(milliseconds: number): number {
  const hours = milliseconds / (1000 * 60 * 60);
  return hours;
}

export { MillisecondToHour as MillisecondsToHours };
