/**
 * Converts the given number of weeks to centuries.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of centuries.
 *
 * @example
 * ```typescript
 * const centuries = WeekToCentury(52);
 * ```
 */
export function WeekToCentury(weeks: number): number {
  return weeks / (52 * 100);
}

export { WeekToCentury as WeeksToCenturies };
