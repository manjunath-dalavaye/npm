/**
 * Converts a number of centuries to hours.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of hours.
 *
 * @example
 * ```typescript
 * const hours = CenturyToHour(2);
 * ```
 */
export function CenturyToHour(centuries: number): number {
  return centuries * 100 * 365 * 24;
}

export { CenturyToHour as CenturiesToHours };
