/**
 * Converts a given number of centuries to years.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of years.
 *
 * @example
 * ```typescript
 * const years = CenturyToYear(2);
 * ```
 */
export function CenturyToYear(centuries: number): number {
  return centuries * 100;
}

export { CenturyToYear as CenturiesToYears };
