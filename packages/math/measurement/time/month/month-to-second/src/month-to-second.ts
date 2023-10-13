/**
 * Converts a number of months to seconds.
 *
 * @param months - The number of months to convert.
 * @returns The equivalent number of seconds.
 *
 * @example
 * ```typescript
 * const seconds = MonthToSecond(2);
 * ```
 */
export function MonthToSecond(months: number): number {
  return months * 30 * 24 * 60 * 60;
}

export { MonthToSecond as MonthsToSeconds };
