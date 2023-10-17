/**
 * Converts a temperature value in Reaumur to Kelvin.
 *
 * @param reaumur - The temperature value in Reaumur to be converted.
 * @returns The temperature value converted to Kelvin.
 *
 * @example
 * ```typescript
 * const kelvin = ReaumurToKelvin(80); // 373.15
 * ```
 */
export function ReaumurToKelvin(reaumur: number): number {
  return (reaumur * 5) / 4 + 273.15;
}

export { ReaumurToKelvin as Re2K };
