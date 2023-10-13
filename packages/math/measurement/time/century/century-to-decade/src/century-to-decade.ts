/**
 * Converts a number of centuries to decades.
 *
 * @param centuries - The number of centuries to convert.
 * @returns The equivalent number of decades.
 *
 * @example
 * ```typescript
 * const decades = CenturyToDecade(2);
 * ```
 */
export function CenturyToDecade(centuries: number): number {
  return centuries * 10;
}

export { CenturyToDecade as CenturiesToDecades };
