/**
 * Converts a number of decades to weeks.
 *
 * @param decades - The number of decades to convert.
 * @returns The equivalent number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = DecadeToWeek(2);
 * ```
 */
export function DecadeToWeek(decades: number): number {
  return decades * 10 * 52;
}

export { DecadeToWeek as DecadesToWeeks };
