/**
 * Converts a temperature value in Kelvin to Reaumur.
 *
 * @param kelvin - The temperature value in Kelvin.
 * @returns The temperature value in Reaumur.
 *
 * @example
 * ```typescript
 * const reaumur = KelvinToReaumur(373.15); // 100
 * ```
 */
export function KelvinToReaumur(kelvin: number): number {
  return (kelvin - 273.15) * 0.8;
}

export { KelvinToReaumur as K2Re };
