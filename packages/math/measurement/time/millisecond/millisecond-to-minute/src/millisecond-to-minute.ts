/**
 * Converts milliseconds to minutes.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of minutes.
 *
 * @example
 * ```typescript
 * MillisecondToMinute(60000); // returns 1
 * ```
 */
export function MillisecondToMinute(milliseconds: number): number {
  const minutes = milliseconds / (1000 * 60);
  return minutes;
}

export { MillisecondToMinute as MillisecondsToMinutes };
