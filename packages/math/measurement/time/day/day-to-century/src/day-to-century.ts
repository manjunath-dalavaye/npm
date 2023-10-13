/**
 * Converts a number of days to centuries.
 *
 * @param days - The number of days to convert.
 * @returns The number of centuries.
 *
 * @example
 * ```typescript
 * const centuries = DayToCentury(73000);
 * ```
 */
export function DayToCentury(days: number): number {
  return days / (365 * 100);
}

export { DayToCentury as DaysToCenturies };
