/**
 * Converts hours to days.
 *
 * @param hours - The number of hours to convert.
 * @returns The equivalent number of days.
 *
 * @example
 * ```typescript
 * const days = HourToDay(2);
 * ```
 */
export function HourToDay(hours: number): number {
  return hours / 24;
}

export { HourToDay as HoursToDays };
