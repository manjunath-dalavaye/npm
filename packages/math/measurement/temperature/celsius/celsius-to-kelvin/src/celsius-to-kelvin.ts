/**
 * Converts temperature in Celsius to Kelvin.
 *
 * @param celsius - The temperature in Celsius.
 * @returns The temperature in Kelvin.
 *
 * @example
 * ```typescript
 * const kelvin = CelsiusToKelvin(100); // 373.15
 * ```
 */
export function CelsiusToKelvin(celsius: number): number {
  return celsius + 273.15;
}

export { CelsiusToKelvin as C2K };
