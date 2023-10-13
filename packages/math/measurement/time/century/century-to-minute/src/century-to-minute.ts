/**
 * Converts a number of centuries to minutes.
 *
 * @param centuries - The number of centuries to convert to minutes.
 * @returns The equivalent number of minutes.
 *
 * @example
 * ```typescript
 * const minutes = CenturyToMinute(2);
 * ```
 */
export function CenturyToMinute(centuries: number): number {
  return centuries * 100 * 365 * 24 * 60;
}

export { CenturyToMinute as CenturiesToMinutes };
