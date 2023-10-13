/**
 * Converts the given number of months to milliseconds.
 *
 * @param months - The number of months to convert.
 * @returns The equivalent number of milliseconds.
 *
 * @example
 * ```typescript
 * const milliseconds = MonthToMillisecond(2);
 * ```
 */
export function MonthToMillisecond(months: number): number {
  return months * 30 * 24 * 60 * 60 * 1000;
}

export { MonthToMillisecond as MonthsToMilliseconds };
