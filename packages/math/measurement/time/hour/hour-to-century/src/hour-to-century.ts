/**
 * Converts hours to centuries.
 *
 * @param hours - The number of hours to convert.
 * @returns The equivalent number of centuries.
 *
 * @example
 * ```typescript
 * const centuries = HourToCentury(2);
 * ```
 */
export function HourToCentury(hours: number): number {
  return hours / (24 * 365 * 100);
}

export { HourToCentury as HoursToCenturies };
