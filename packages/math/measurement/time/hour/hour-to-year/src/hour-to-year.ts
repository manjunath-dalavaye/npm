/**
 * Converts hours to years.
 *
 * @param hours - The number of hours to convert.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = HourToYear(2);
 * ```
 */
export function HourToYear(hours: number): number {
  return hours / (24 * 365);
}

export { HourToYear as HoursToYears };
