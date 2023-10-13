/**
 * Converts a number of seconds to a number of months.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = SecondToMonth(2592000);
 * ```
 */
export function SecondToMonth(seconds: number): number {
  return seconds / (60 * 60 * 24 * 30);
}

export { SecondToMonth as SecondsToMonths };
