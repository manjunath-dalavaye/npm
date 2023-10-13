/**
 * Converts the given number of years to milliseconds.
 *
 * @param years - The number of years to convert.
 * @returns The equivalent number of milliseconds.
 *
 * @example
 * ```typescript
 * const milliseconds = YearToMillisecond(2);
 * ```
 */
export function YearToMillisecond(years: number): number {
  return years * 365 * 24 * 60 * 60 * 1000;
}

export { YearToMillisecond as YearsToMilliseconds };
