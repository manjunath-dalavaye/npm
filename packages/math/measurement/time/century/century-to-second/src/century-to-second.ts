/**
 * Converts a number of centuries to seconds.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of seconds.
 *
 * @example
 * ```typescript
 * const seconds = CenturyToSecond(2);
 * ```
 */
export function CenturyToSecond(centuries: number): number {
  return centuries * 100 * 365 * 24 * 60 * 60;
}

export { CenturyToSecond as CenturiesToSeconds };
