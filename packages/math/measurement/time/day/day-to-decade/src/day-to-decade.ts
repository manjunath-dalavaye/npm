/**
 * Converts a number of days to decades.
 *
 * @param days - The number of days to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = DayToDecade(7300);
 * ```
 */
export function DayToDecade(days: number): number {
  return days / (365 * 10);
}

export { DayToDecade as DaysToDecades };
