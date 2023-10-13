/**
 * Converts a number of decades to a number of centuries.
 *
 * @param decades - The number of decades to convert.
 * @returns The number of centuries equivalent to the given number of decades.
 *
 * @example
 * ```typescript
 * const centuries = DecadeToCentury(2);
 * ```
 */
export function DecadeToCentury(decades: number): number {
  return decades / 10;
}

export { DecadeToCentury as DecadesToCenturies };
