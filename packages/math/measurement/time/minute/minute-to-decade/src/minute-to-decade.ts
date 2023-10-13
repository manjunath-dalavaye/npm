/**
 * Converts minutes to decades.
 *
 * @param minutes - The number of minutes to be converted.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = MinuteToDecade(2);
 * ```
 */
export function MinuteToDecade(minutes: number): number {
  return minutes / (60 * 24 * 365 * 10);
}

export { MinuteToDecade as MinutesToDecades };
