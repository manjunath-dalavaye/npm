/**
 * Converts minutes to months.
 *
 * @param minutes - The number of minutes to convert.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = MinuteToMonth(2);
 * ```
 */
export function MinuteToMonth(minutes: number): number {
  return minutes / (60 * 24 * 30);
}

export { MinuteToMonth as MinutesToMonths };
