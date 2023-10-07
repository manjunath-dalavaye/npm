/**
 * Converts milliseconds to months.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The number of months equivalent to the given number of milliseconds.
 *
 * @example
 * ```typescript
 * MillisecondToMonth(2592000000); // 1
 * ```
 */
export function MillisecondToMonth(milliseconds: number): number {
  const months = milliseconds / (1000 * 60 * 60 * 24 * 30);
  return months;
}

export { MillisecondToMonth as MillisecondsToMonths };
