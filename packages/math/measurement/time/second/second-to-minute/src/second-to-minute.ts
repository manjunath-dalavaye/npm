/**
 * Converts seconds to minutes.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of minutes equivalent to the given number of seconds.
 *
 * @example
 * ```typescript
 * const minutes = SecondToMinute(120);
 * ```
 */
export function SecondToMinute(seconds: number): number {
  return seconds / 60;
}

export { SecondToMinute as SecondsToMinutes };
