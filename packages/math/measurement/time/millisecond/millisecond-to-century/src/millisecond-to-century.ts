/**
 * Converts milliseconds to centuries.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of centuries equivalent to the given number of milliseconds.
 *
 * @example
 * ```typescript
 * MillisecondToCentury(3153600000000); // 1
 * ```
 */
export function MillisecondToCentury(milliseconds: number): number {
  const centuries = milliseconds / (1000 * 60 * 60 * 24 * 365 * 100);
  return centuries;
}

export { MillisecondToCentury as MillisecondsToCenturies };
