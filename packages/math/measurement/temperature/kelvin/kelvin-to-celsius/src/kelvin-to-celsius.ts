/**
 * Converts temperature in Kelvin to Celsius.
 *
 * @param kelvin - The temperature in Kelvin.
 * @returns The temperature in Celsius.
 *
 * @example
 * ```typescript
 * const celsius = KelvinToCelsius(373.15); // 100
 * ```
 */
export function KelvinToCelsius(kelvin: number): number {
  return kelvin - 273.15;
}

export { KelvinToCelsius as K2C };
