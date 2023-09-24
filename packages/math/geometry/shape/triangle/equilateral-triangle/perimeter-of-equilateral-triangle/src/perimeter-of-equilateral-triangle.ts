/**
 * Calculates the perimeter of an equilateral triangle given the length of one of its sides.
 *
 * @param side - The length of one of the sides of the equilateral triangle.
 * @returns The perimeter of the equilateral triangle.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfEquilateralTriangle(3); // 9
 * ```
 */
export function PerimeterOfEquilateralTriangle(side: number): number {
  if (side <= 0) {
    return 0;
  }
  const perimeter = 3 * side;
  return perimeter;
}
