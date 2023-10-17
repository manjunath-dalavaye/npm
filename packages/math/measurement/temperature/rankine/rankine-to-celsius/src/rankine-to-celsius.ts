/**
 * Converts a temperature value in Rankine to Celsius.
 *
 * @param rankine - The temperature value in Rankine.
 * @returns The temperature value in Celsius.
 *
 * @example
 * ```typescript
 * const celsius = RankineToCelsius(671.67); // 100
 * ```
 */
export function RankineToCelsius(rankine: number): number {
  return ((rankine - 491.67) * 5) / 9;
}

export { RankineToCelsius as R2C };
