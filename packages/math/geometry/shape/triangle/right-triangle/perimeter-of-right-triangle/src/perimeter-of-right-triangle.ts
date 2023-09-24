/**
 * Calculates the perimeter of a right triangle given the lengths of its two legs.
 *
 * @param a - The length of the first leg of the right triangle.
 * @param b - The length of the second leg of the right triangle.
 * @returns The perimeter of the right triangle.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfRightTriangle(3, 4); // 12
 * ```
 */
export function PerimeterOfRightTriangle(a: number, b: number): number {
  if (a <= 0 || b <= 0) {
    return 0;
  }
  const c = Math.sqrt(a * a + b * b);
  const perimeter = a + b + c;
  return perimeter;
}
