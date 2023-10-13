/**
 * Converts the given number of months to minutes.
 *
 * @param months - The number of months to convert.
 * @returns The equivalent number of minutes.
 *
 * @example
 * ```typescript
 * const minutes = MonthToMinute(2);
 * ```
 */
export function MonthToMinute(months: number): number {
  return months * 30 * 24 * 60;
}

export { MonthToMinute as MonthsToMinutes };
