/**
 * Converts minutes to seconds.
 *
 * @param minutes - The number of minutes to convert.
 * @returns The number of seconds equivalent to the given number of minutes.
 *
 * @example
 * ```typescript
 * const seconds = MinuteToSecond(2);
 * ```
 */
export function MinuteToSecond(minutes: number): number {
  return minutes * 60;
}

export { MinuteToSecond as MinutesToSeconds };
