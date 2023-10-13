/**
 * Converts the given number of days to months.
 *
 * @param days - The number of days to convert to months.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = DayToMonth(2);
 * ```
 */
export function DayToMonth(days: number): number {
  return days / 30;
}

export { DayToMonth as DaysToMonths };
