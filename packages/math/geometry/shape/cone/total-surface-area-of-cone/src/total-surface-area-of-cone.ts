/**
 * Calculates the total surface area of a cone.
 *
 * @param radius - The radius of the base of the cone.
 * @param slantHeight - The slant height of the cone.
 * @returns The total surface area of the cone.
 *
 * @example
 * ```typescript
 * TotalSurfaceAreaOfCone(5, 10); // 235.61944901923448
 * ```
 */
export function TotalSurfaceAreaOfCone(
  radius: number,
  slantHeight: number,
): number {
  if (radius <= 0 || slantHeight <= 0) {
    return 0;
  }
  const baseArea = Math.PI * Math.pow(radius, 2);
  const curvedSurfaceArea = Math.PI * radius * slantHeight;
  const totalSurfaceArea = baseArea + curvedSurfaceArea;
  return totalSurfaceArea;
}
