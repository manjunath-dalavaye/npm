/**
 * Converts milliseconds to decades.
 *
 * @param milliseconds - The number of milliseconds to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * MillisecondToDecade(315360000000); // returns 1
 * ```
 */
export function MillisecondToDecade(milliseconds: number): number {
  const decades = milliseconds / (1000 * 60 * 60 * 24 * 365 * 10);
  return decades;
}

export { MillisecondToDecade as MillisecondsToDecades };
