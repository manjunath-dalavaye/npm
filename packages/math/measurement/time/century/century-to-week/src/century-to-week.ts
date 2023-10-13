/**
 * Converts a number of centuries to weeks.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of weeks.
 *
 * @example
 * ```typescript
 * const weeks = CenturyToWeek(2);
 * ```
 */
export function CenturyToWeek(centuries: number): number {
  return centuries * 100 * 52;
}

export { CenturyToWeek as CenturiesToWeeks };
