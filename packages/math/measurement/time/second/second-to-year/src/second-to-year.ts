/**
 * Converts seconds to years.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = SecondToYear(31536000);
 * ```
 */
export function SecondToYear(seconds: number): number {
  return seconds / (60 * 60 * 24 * 365);
}

export { SecondToYear as SecondsToYears };
