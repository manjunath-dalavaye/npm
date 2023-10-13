/**
 * Converts the given number of months to years.
 *
 * @param months - The number of months to convert to years.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = MonthToYear(24);
 * ```
 */
export function MonthToYear(months: number): number {
  return months / 12;
}

export { MonthToYear as MonthsToYears };
