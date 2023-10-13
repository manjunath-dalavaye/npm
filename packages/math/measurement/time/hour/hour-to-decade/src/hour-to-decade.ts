/**
 * Converts hours to decades.
 *
 * @param hours - The number of hours to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = HourToDecade(2);
 * ```
 */
export function HourToDecade(hours: number): number {
  return hours / (24 * 365 * 10);
}

export { HourToDecade as HoursToDecades };
