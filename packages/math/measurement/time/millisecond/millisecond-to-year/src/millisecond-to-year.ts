/**
 * Converts milliseconds to years.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of years equivalent to the given number of milliseconds.
 *
 * @example
 * ```typescript
 * MillisecondToYear(31536000000); // 1
 * ```
 */
export function MillisecondToYear(milliseconds: number): number {
  const years = milliseconds / (1000 * 60 * 60 * 24 * 365);
  return years;
}

export { MillisecondToYear as MillisecondsToYears };
