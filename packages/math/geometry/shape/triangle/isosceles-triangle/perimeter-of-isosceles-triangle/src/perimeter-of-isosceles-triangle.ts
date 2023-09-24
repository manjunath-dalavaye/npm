/**
 * Calculates the perimeter of an isosceles triangle given the length of two equal sides and the length of the base.
 *
 * @param side - The length of the equal sides of the isosceles triangle.
 * @param base - The length of the base of the isosceles triangle.
 * @returns The perimeter of the isosceles triangle.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfIsoscelesTriangle(3, 4); // 10
 * ```
 */
export function PerimeterOfIsoscelesTriangle(
  side: number,
  base: number,
): number {
  if (side <= 0 || base <= 0) {
    return 0;
  }
  const perimeter = 2 * side + base;
  return perimeter;
}
