/**
 * Converts a number of weeks to decades.
 *
 * @param weeks - The number of weeks to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = WeekToDecade(52);
 * ```
 */
export function WeekToDecade(weeks: number): number {
  return weeks / (52 * 10);
}

export { WeekToDecade as WeeksToDecades };
