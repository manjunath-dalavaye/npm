/**
 * Converts minutes to years.
 *
 * @param minutes - The number of minutes to be converted.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = MinuteToYear(2);
 * ```
 */
export function MinuteToYear(minutes: number): number {
  return minutes / (60 * 24 * 365);
}

export { MinuteToYear as MinutesToYears };
