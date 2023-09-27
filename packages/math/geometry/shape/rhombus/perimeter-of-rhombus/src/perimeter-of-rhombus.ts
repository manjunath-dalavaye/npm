/**
 * Calculates the perimeter of a rhombus given the length of one of its sides.
 *
 * @param sideLength - The length of one of the sides of the rhombus.
 * @returns The perimeter of the rhombus.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfRhombus(5); // returns 20
 * ```
 */
export function PerimeterOfRhombus(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return 4 * sideLength;
}
