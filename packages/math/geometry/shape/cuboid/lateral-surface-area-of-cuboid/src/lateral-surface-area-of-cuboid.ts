/**
 * Calculates the lateral surface area of a cuboid.
 *
 * @remarks
 * The lateral surface area is the sum of the areas of the four sides of the cuboid, excluding the top and bottom faces.
 *
 * @param length - The length of the cuboid.
 * @param width - The width of the cuboid.
 * @param height - The height of the cuboid.
 *
 * @returns The lateral surface area of the cuboid.
 *
 * @example
 * ```typescript
 * const lateralSurfaceArea = LateralSurfaceAreaOfCuboid(5, 3, 2); // returns 32
 * ```
 */
export function LateralSurfaceAreaOfCuboid(
  length: number,
  width: number,
  height: number,
): number {
  if (length <= 0 || width <= 0 || height <= 0) {
    return 0;
  }
  const frontAndBack = 2 * length * height;
  const sides = 2 * width * height;
  return frontAndBack + sides;
}
