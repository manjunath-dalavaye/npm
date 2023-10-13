/**
 * Converts minutes to milliseconds.
 *
 * @param minutes - The number of minutes to convert.
 * @returns The number of milliseconds equivalent to the given number of minutes.
 *
 * @example
 * ```typescript
 * const milliseconds = MinuteToMillisecond(2);
 * ```
 */
export function MinuteToMillisecond(minutes: number): number {
  return minutes * (60 * 1000);
}

export { MinuteToMillisecond as MinutesToMilliseconds };
