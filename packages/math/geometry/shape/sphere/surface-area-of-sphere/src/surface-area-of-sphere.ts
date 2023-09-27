/**
 * Calculates the surface area of a sphere given its radius.
 *
 * @param radius - The radius of the sphere.
 * @returns The surface area of the sphere.
 *
 * @example
 * ```typescript
 * const radius = 5;
 * const surfaceArea = SurfaceAreaOfSphere(radius);
 * console.log(surfaceArea); // Output: 314.1592653589793
 * ```
 */
export function SurfaceAreaOfSphere(radius: number): number {
  if (radius <= 0) {
    return 0;
  }
  return 4 * Math.PI * Math.pow(radius, 2);
}
