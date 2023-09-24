import { PerimeterOfTriangle } from "@ilihub/perimeter-of-triangle";

/**
 * Calculates the perimeter of a scalene triangle given the lengths of its three sides.
 *
 * @param a - The length of the first side of the triangle.
 * @param b - The length of the second side of the triangle.
 * @param c - The length of the third side of the triangle.
 * @returns The perimeter of the scalene triangle.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfScaleneTriangle(3, 4, 5); // 12
 * ```
 */
export function PerimeterOfScaleneTriangle(
  a: number,
  b: number,
  c: number,
): number {
  return PerimeterOfTriangle(a, b, c);
}
