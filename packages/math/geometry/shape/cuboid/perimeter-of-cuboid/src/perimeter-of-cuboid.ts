/**
 * Calculates the perimeter of a cuboid.
 *
 * @param length - The length of the cuboid.
 * @param width - The width of the cuboid.
 * @param height - The height of the cuboid.
 * @returns The perimeter of the cuboid.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfCuboid(5, 3, 2); // returns 40
 * ```
 */
export function PerimeterOfCuboid(
  length: number,
  width: number,
  height: number,
): number {
  if (length <= 0 || width <= 0 || height <= 0) {
    return 0;
  }
  return 4 * (length + width + height);
}
