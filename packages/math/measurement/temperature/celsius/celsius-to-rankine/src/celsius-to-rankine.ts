/**
 * Converts a temperature value from Celsius to Rankine.
 *
 * @param celsius - The temperature value in Celsius.
 * @returns The temperature value in Rankine.
 *
 * @example
 * ```typescript
 * const rankine = CelsiusToRankine(100); // 671.67
 * ```
 */
export function CelsiusToRankine(celsius: number): number {
  return ((celsius + 273.15) * 9) / 5;
}

export { CelsiusToRankine as C2R };
