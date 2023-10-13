/**
 * Converts seconds to weeks.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = SecondToWeek(604800);
 * ```
 */
export function SecondToWeek(seconds: number): number {
  return seconds / (60 * 60 * 24 * 7);
}

export { SecondToWeek as SecondsToWeeks };
