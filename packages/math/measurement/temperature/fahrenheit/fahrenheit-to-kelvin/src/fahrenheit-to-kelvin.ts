/**
 * Converts a temperature value from Fahrenheit to Kelvin.
 *
 * @param fahrenheit - The temperature value in Fahrenheit.
 * @returns The temperature value in Kelvin.
 *
 * @example
 * ```typescript
 * const kelvin = FahrenheitToKelvin(212); // 373.15
 * ```
 */
export function FahrenheitToKelvin(fahrenheit: number): number {
  return ((fahrenheit + 459.67) * 5) / 9;
}

export { FahrenheitToKelvin as F2K };
