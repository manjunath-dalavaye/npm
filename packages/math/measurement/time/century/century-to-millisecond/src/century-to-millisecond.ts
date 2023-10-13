/**
 * Converts a number of centuries to milliseconds.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of milliseconds.
 *
 * @example
 * ```typescript
 * const milliseconds = CenturyToMillisecond(2);
 * ```
 */
export function CenturyToMillisecond(centuries: number): number {
  return centuries * 100 * 365 * 24 * 60 * 60 * 1000;
}

export { CenturyToMillisecond as CenturiesToMilliseconds };
