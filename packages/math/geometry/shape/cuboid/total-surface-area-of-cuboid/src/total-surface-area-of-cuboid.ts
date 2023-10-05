/**
 * Calculates the total surface area of a cuboid.
 *
 * @param length - The length of the cuboid.
 * @param width - The width of the cuboid.
 * @param height - The height of the cuboid.
 * @returns The total surface area of the cuboid.
 *
 * @example
 * ```typescript
 * const totalSurfaceArea = TotalSurfaceAreaOfCuboid(5, 3, 2); // returns 62
 * ```
 */
export function TotalSurfaceAreaOfCuboid(
  length: number,
  width: number,
  height: number,
): number {
  if (length <= 0 || width <= 0 || height <= 0) {
    return 0;
  }
  const topAndBottom = 2 * length * width;
  const frontAndBack = 2 * length * height;
  const sides = 2 * width * height;
  return topAndBottom + frontAndBack + sides;
}
