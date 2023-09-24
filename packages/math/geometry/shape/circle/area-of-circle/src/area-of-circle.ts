/**
 * Calculates the area of a circle given its radius.
 *
 * @param radius - The radius of the circle.
 * @returns The area of the circle.
 *
 * @example
 * ```typescript
 * const area = AreaOfCircle(5); // Returns 78.53981633974483
 * ```
 */
export function AreaOfCircle(radius: number): number {
  if (radius <= 0) {
    return 0;
  }
  const area = Math.PI * radius ** 2;
  return area;
}
