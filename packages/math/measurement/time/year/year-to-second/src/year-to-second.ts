/**
 * Converts years to seconds.
 *
 * @param years - The number of years to convert.
 * @returns The equivalent number of seconds.
 *
 * @example
 * ```typescript
 * const seconds = YearToSecond(2);
 * ```
 */
export function YearToSecond(years: number): number {
  return years * 365 * 24 * 60 * 60;
}

export { YearToSecond as YearsToSeconds };
