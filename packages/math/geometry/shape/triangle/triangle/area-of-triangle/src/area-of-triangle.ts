/**
 * Calculates the area of a triangle given the length of its three sides.
 *
 * @param a - The length of the first side of the triangle.
 * @param b - The length of the second side of the triangle.
 * @param c - The length of the third side of the triangle.
 * @returns The area of the triangle.
 *
 * @example
 * ```typescript
 * const area = AreaOfTriangle(3, 4, 5); // 6
 * ```
 */
export function AreaOfTriangle(a: number, b: number, c: number): number {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 0;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 0;
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
