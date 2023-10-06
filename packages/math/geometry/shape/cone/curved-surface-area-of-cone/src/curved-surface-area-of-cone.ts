/**
 * Calculates the curved surface area of a cone.
 *
 * @param radius - The radius of the base of the cone.
 * @param slantHeight - The slant height of the cone.
 * @returns The curved surface area of the cone.
 *
 * @example
 * ```typescript
 * CurvedSurfaceAreaOfCone(5, 10); // 157.07963267948966
 * ```
 */
export function CurvedSurfaceAreaOfCone(
  radius: number,
  slantHeight: number,
): number {
  if (radius <= 0 || slantHeight <= 0) {
    return 0;
  }
  const curvedSurfaceArea = Math.PI * radius * slantHeight;
  return curvedSurfaceArea;
}
