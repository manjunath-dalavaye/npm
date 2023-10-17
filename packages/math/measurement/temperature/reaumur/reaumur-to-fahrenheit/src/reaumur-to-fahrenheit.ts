/**
 * Converts a temperature value in Reaumur to Fahrenheit.
 *
 * @param reaumur - The temperature value in Reaumur to be converted.
 * @returns The temperature value in Fahrenheit.
 *
 * @example
 * ```typescript
 * const fahrenheit = ReaumurToFahrenheit(80); // 212
 * ```
 */
export function ReaumurToFahrenheit(reaumur: number): number {
  return (reaumur * 9) / 4 + 32;
}

export { ReaumurToFahrenheit as Re2F };
