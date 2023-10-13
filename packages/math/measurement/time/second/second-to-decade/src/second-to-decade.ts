/**
 * Converts seconds to decades.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = SecondToDecade(315360000);
 * ```
 */
export function SecondToDecade(seconds: number): number {
  return seconds / (60 * 60 * 24 * 365 * 10);
}

export { SecondToDecade as SecondsToDecades };
