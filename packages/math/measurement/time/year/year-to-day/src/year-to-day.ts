/**
 * Converts the given number of years to days.
 *
 * @param years - The number of years to convert to days.
 * @returns The equivalent number of days.
 *
 * @example
 * ```typescript
 * const days = YearToDay(2);
 * ```
 */
export function YearToDay(years: number): number {
  return years * 365;
}

export { YearToDay as YearsToDays };
