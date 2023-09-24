import { AreaOfTriangle } from "@ilihub/area-of-triangle";

/**
 * Calculates the area of a scalene triangle using the given side lengths.
 *
 * @param a-  The length of side a.
 * @param b-  The length of side b.
 * @param c-  The length of side c.
 * @returns The area of the scalene triangle.
 *
 * @example
 * ```typescript
 * const area = AreaOfScaleneTriangle(3, 4, 5); // 6
 * ```
 */
export function AreaOfScaleneTriangle(a: number, b: number, c: number): number {
  return AreaOfTriangle(a, b, c);
}
