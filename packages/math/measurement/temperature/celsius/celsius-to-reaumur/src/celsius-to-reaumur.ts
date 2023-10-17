/**
 * Converts a temperature value from Celsius to Reaumur.
 *
 * @param celsius - The temperature value in Celsius.
 * @returns The temperature value in Reaumur.
 *
 * @example
 * ```typescript
 * const reaumur = CelsiusToReaumur(100); // 80
 * ```
 */
export function CelsiusToReaumur(celsius: number): number {
  return (celsius * 4) / 5;
}

export { CelsiusToReaumur as C2Re };
