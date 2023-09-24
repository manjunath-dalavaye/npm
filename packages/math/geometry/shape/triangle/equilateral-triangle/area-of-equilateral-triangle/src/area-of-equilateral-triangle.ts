/**
 * Calculates the area of an equilateral triangle given the length of one of its sides.
 *
 * @param side - The length of one of the sides of the equilateral triangle.
 * @returns The area of the equilateral triangle.
 *
 * @example
 * ```typescript
 * const area = AreaOfEquilateralTriangle(3); // 3.8971143170299736
 * ```
 */
export function AreaOfEquilateralTriangle(side: number): number {
  if (side <= 0) {
    return 0;
  }
  const height = (Math.sqrt(3) / 2) * side;
  const area = (side * height) / 2;
  return area;
}
