/**
 * Converts the given number of weeks to days.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of days.
 *
 * @example
 * ```typescript
 * const days = WeekToDay(2);
 * ```
 */
export function WeekToDay(weeks: number): number {
  return weeks * 7;
}

export { WeekToDay as WeeksToDays };
