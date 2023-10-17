/**
 * Converts a temperature value from Celsius to Fahrenheit.
 *
 * @param celsius - The temperature value in Celsius.
 * @returns The temperature value in Fahrenheit.
 *
 * @example
 * ```typescript
 * const fahrenheit = CelsiusToFahrenheit(100); // 212
 * ```
 */
export function CelsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export { CelsiusToFahrenheit as C2F };
