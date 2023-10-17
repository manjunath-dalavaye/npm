/**
 * Converts a temperature value from Rankine to Fahrenheit.
 *
 * @param rankine - The temperature value in Rankine.
 * @returns The temperature value in Fahrenheit.
 *
 * @example
 * ```typescript
 * const fahrenheit = RankineToFahrenheit(671.67); // 212
 * ```
 */
export function RankineToFahrenheit(rankine: number): number {
  return rankine - 459.67;
}

export { RankineToFahrenheit as R2F };
