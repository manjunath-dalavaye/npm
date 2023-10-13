/**
 * Converts a number of decades to months.
 *
 * @param decades - The number of decades to convert.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = DecadeToMonth(2);
 * ```
 */
export function DecadeToMonth(decades: number): number {
  return decades * 10 * 12;
}

export { DecadeToMonth as DecadesToMonths };
