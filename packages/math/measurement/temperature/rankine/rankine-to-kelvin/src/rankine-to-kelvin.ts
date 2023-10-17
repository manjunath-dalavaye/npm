/**
 * Converts a temperature value from Rankine to Kelvin.
 *
 * @param rankine - The temperature value in Rankine.
 * @returns The temperature value in Kelvin.
 *
 * @example
 * ```typescript
 * const kelvin = RankineToKelvin(671.67); // 373.15
 * ```
 */
export function RankineToKelvin(rankine: number): number {
  return (rankine * 5) / 9;
}

export { RankineToKelvin as R2K };
