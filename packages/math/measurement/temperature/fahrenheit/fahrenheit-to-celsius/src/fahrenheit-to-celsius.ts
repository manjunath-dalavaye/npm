/**
 * Converts a temperature value from Fahrenheit to Celsius.
 *
 * @param fahrenheit - The temperature value in Fahrenheit.
 * @returns The temperature value in Celsius.
 *
 * @example
 * ```typescript
 * const celsius = FahrenheitToCelsius(212); // 100
 * ```
 */
export function FahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export { FahrenheitToCelsius as F2C };
