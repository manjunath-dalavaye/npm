/**
 * Calculates the area of a semi-circle given its radius.
 *
 * @param radius - The radius of the semi-circle.
 * @returns The area of the semi-circle.
 *
 * @example
 * ```typescript
 * const area = AreaOfSemiCircle(5); // 39.269908169872416
 * ```
 */
export function AreaOfSemiCircle(radius: number): number {
  if (radius <= 0) {
    return 0;
  }
  const area = (Math.PI * radius ** 2) / 2;
  return area;
}
