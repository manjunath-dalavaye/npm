/**
 * Converts hours to months.
 *
 * @param hours - The number of hours to convert.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = HourToMonth(2);
 * ```
 */
export function HourToMonth(hours: number): number {
  return hours / (24 * 30);
}

export { HourToMonth as HoursToMonths };
