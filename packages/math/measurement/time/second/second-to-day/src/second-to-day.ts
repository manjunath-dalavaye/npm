/**
 * Converts seconds to days.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of days.
 *
 * @example
 * ```typescript
 * const days = SecondToDay(86400);
 * ```
 */
export function SecondToDay(seconds: number): number {
  return seconds / (60 * 60 * 24);
}

export { SecondToDay as SecondsToDays };
