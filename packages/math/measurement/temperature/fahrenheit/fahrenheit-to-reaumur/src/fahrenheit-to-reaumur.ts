/**
 * Converts a temperature value in Fahrenheit to Reaumur.
 *
 * @param fahrenheit - The temperature value in Fahrenheit.
 * @returns The temperature value in Reaumur.
 *
 * @example
 * ```typescript
 * const reaumur = FahrenheitToReaumur(212); // 80
 * ```
 */
export function FahrenheitToReaumur(fahrenheit: number): number {
  return ((fahrenheit - 32) * 4) / 9;
}

export { FahrenheitToReaumur as F2Re };
