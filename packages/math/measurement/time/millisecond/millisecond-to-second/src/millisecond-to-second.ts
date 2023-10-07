/**
 * Converts milliseconds to seconds.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of seconds.
 *
 * @example
 * ```typescript
 * MillisecondToSecond(1000); // returns 1
 * ```
 */
export function MillisecondToSecond(milliseconds: number): number {
  const seconds = milliseconds / 1000;
  return seconds;
}

export { MillisecondToSecond as MillisecondsToSeconds };
