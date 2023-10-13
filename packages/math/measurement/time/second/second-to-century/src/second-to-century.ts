/**
 * Converts seconds to centuries.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of centuries.
 *
 * @example
 * ```typescript
 * const centuries = SecondToCentury(3153600000);
 * ```
 */
export function SecondToCentury(seconds: number): number {
  return seconds / (60 * 60 * 24 * 365 * 100);
}

export { SecondToCentury as SecondsToCenturies };
