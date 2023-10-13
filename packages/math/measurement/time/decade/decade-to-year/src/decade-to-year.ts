/**
 * Converts a number of decades to years.
 *
 * @param decades - The number of decades to convert to years.
 * @returns The number of years equivalent to the given number of decades.
 *
 * @example
 * ```typescript
 * const years = DecadeToYear(2);
 * ```
 */
export function DecadeToYear(decades: number): number {
  return decades * 10;
}

export { DecadeToYear as DecadesToYears };
