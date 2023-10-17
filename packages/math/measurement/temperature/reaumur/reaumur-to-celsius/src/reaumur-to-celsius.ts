/**
 * Converts a temperature value from Reaumur to Celsius.
 *
 * @param reaumur - The temperature value in Reaumur to be converted.
 * @returns The temperature value converted to Celsius.
 *
 * @example
 * ```typescript
 * const celsius = ReaumurToCelsius(80); // 100
 * ```
 */
export function ReaumurToCelsius(reaumur: number): number {
  return (reaumur * 5) / 4;
}

export { ReaumurToCelsius as Re2C };
