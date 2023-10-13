/**
 * Converts a number of months to decades.
 *
 * @param months - The number of months to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = MonthToDecade(240);
 * ```
 */
export function MonthToDecade(months: number): number {
  return months / 120;
}

export { MonthToDecade as MonthsToDecades };
