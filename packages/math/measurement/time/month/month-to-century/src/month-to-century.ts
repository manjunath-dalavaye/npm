/**
 * Converts a number of months to centuries.
 *
 * @param months - The number of months to convert.
 * @returns The equivalent number of centuries.
 *
 * @example
 * ```typescript
 * const centuries = MonthToCentury(2400);
 * ```
 */
export function MonthToCentury(months: number): number {
  return months / 1200;
}

export { MonthToCentury as MonthsToCenturies };
