/**
 * Converts seconds to hours.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of hours.
 *
 * @example
 * ```typescript
 * const hours = SecondToHour(3600);
 * ```
 */
export function SecondToHour(seconds: number): number {
  return seconds / (60 * 60);
}

export { SecondToHour as SecondsToHours };
