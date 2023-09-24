/**
 * Calculates the perimeter of a semi-circle given its radius.
 *
 * @param radius - The radius of the semi-circle.
 * @returns The perimeter of the semi-circle.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfSemiCircle(5); // returns 25.707963267948966
 * ```
 */
export function PerimeterOfSemiCircle(radius: number): number {
  if (radius <= 0) {
    return 0;
  }
  const perimeter = Math.PI * radius + 2 * radius;
  return perimeter;
}
