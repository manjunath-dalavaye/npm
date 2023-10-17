/**
 * Converts a temperature value from Kelvin to Rankine.
 *
 * @param kelvin - The temperature value in Kelvin.
 * @returns The temperature value in Rankine.
 *
 * @example
 * ```typescript
 * const rankine = KelvinToRankine(373.15); // 671.67
 * ```
 */
export function KelvinToRankine(kelvin: number): number {
  return kelvin * 1.8;
}

export { KelvinToRankine as K2R };
