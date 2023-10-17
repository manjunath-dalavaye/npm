/**
 * Converts a temperature value in Fahrenheit to Rankine.
 *
 * @param fahrenheit - The temperature value in Fahrenheit.
 * @returns The temperature value in Rankine.
 *
 * @example
 * ```typescript
 * const rankine = FahrenheitToRankine(212); // 671.67
 * ```
 */
export function FahrenheitToRankine(fahrenheit: number): number {
  return fahrenheit + 459.67;
}

export { FahrenheitToRankine as F2R };
