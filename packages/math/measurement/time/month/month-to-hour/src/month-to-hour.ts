/**
 * Converts a number of months to hours.
 *
 * @param months - The number of months to convert.
 * @returns The number of hours equivalent to the given number of months.
 *
 * @example
 * ```typescript
 * const hours = MonthToHour(2);
 * ```
 */
export function MonthToHour(months: number): number {
  return months * 30 * 24;
}

export { MonthToHour as MonthsToHours };
