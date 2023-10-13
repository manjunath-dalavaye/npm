/**
 * Converts the given number of months to days.
 *
 * @param months - The number of months to convert.
 * @returns The equivalent number of days.
 *
 * @example
 * ```typescript
 * const days = MonthToDay(2);
 * ```
 */
export function MonthToDay(months: number): number {
  return months * 30;
}

export { MonthToDay as MonthsToDays };
