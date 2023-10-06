/**
 * Calculates the total surface area of a cylinder.
 *
 * @param radius - The radius of the cylinder.
 * @param height - The height of the cylinder.
 * @returns The total surface area of the cylinder.
 *
 * @example
 * ```typescript
 * const totalSurfaceArea = TotalSurfaceAreaOfCylinder(5, 10);
 * console.log(totalSurfaceArea); // Output: 471.23889803846896
 * ```
 */
export function TotalSurfaceAreaOfCylinder(
  radius: number,
  height: number,
): number {
  if (radius <= 0 || height <= 0) {
    return 0;
  }
  const lateralSurfaceArea = 2 * Math.PI * radius * height;
  const baseSurfaceArea = 2 * Math.PI * Math.pow(radius, 2);
  const totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea;
  return totalSurfaceArea;
}
