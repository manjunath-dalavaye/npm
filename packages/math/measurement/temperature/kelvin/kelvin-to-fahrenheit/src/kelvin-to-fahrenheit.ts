/**
 * Converts temperature in Kelvin to Fahrenheit.
 *
 * @param kelvin - The temperature in Kelvin.
 * @returns The temperature in Fahrenheit.
 *
 * @example
 * ```typescript
 * const fahrenheit = KelvinToFahrenheit(373.15); // 212
 * ```
 */
export function KelvinToFahrenheit(kelvin: number): number {
  return (kelvin - 273.15) * 1.8 + 32;
}

export { KelvinToFahrenheit as K2F };
