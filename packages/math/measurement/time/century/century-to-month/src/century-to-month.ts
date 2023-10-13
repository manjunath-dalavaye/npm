/**
 * Converts a given number of centuries to months.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of months.
 *
 * @example
 * ```typescript
 * const months = CenturyToMonth(2);
 * ```
 */
export function CenturyToMonth(centuries: number): number {
  return centuries * 100 * 12;
}

export { CenturyToMonth as CenturiesToMonths };
