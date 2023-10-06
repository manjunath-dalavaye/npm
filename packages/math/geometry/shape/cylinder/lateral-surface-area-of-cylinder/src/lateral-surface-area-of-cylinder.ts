/**
 * Calculates the lateral surface area of a cylinder.
 *
 * @param radius - The radius of the cylinder.
 * @param height - The height of the cylinder.
 * @returns The lateral surface area of the cylinder.
 *
 * @example
 * ```typescript
 * const lateralSurfaceArea = LateralSurfaceAreaOfCylinder(5, 10);
 * console.log(lateralSurfaceArea); // Output: 314.1592653589793
 * ```
 */
export function LateralSurfaceAreaOfCylinder(
  radius: number,
  height: number,
): number {
  if (radius <= 0 || height <= 0) {
    return 0;
  }
  const lateralSurfaceArea = 2 * Math.PI * radius * height;
  return lateralSurfaceArea;
}
