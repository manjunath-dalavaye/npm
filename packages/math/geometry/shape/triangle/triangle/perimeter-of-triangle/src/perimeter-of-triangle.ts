/**
 * Calculates the perimeter of a triangle given the lengths of its sides.
 *
 * @param a - The length of the first side of the triangle.
 * @param b - The length of the second side of the triangle.
 * @param c - The length of the third side of the triangle.
 * @returns The perimeter of the triangle, or 0 if the input values do not form a valid triangle.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfTriangle(3, 4, 5); // 12
 * ```
 */
export function PerimeterOfTriangle(a: number, b: number, c: number): number {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 0;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 0;
  }
  return a + b + c;
}
