/**
 * Converts a given number of centuries to days.
 *
 * @param centuries - The number of centuries to convert to days.
 * @returns The equivalent number of days.
 *
 * @example
 * ```typescript
 * const days = CenturyToDay(2);
 * ```
 */
export function CenturyToDay(centuries: number): number {
  return centuries * 100 * 365;
}

export { CenturyToDay as CenturiesToDays };
