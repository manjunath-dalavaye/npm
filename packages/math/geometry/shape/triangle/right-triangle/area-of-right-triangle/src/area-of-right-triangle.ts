/**
 * Calculates the area of a right triangle given the lengths of its two legs.
 *
 * @param a - The length of the first leg of the right triangle.
 * @param b - The length of the second leg of the right triangle.
 * @returns The area of the right triangle.
 *
 * @example
 * ```typescript
 * const area = AreaOfRightTriangle(3, 4); // 6
 * ```
 */
export function AreaOfRightTriangle(a: number, b: number): number {
  if (a <= 0 || b <= 0) {
    return 0;
  }
  const area = (a * b) / 2;
  return area;
}
