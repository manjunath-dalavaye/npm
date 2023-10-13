/**
 * Converts seconds to milliseconds.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of milliseconds equivalent to the given number of seconds.
 *
 * @example
 * ```typescript
 * const milliseconds = SecondToMillisecond(2);
 * ```
 */
export function SecondToMillisecond(seconds: number): number {
  return seconds * 1000;
}

export { SecondToMillisecond as SecondsToMilliseconds };
