/**
 * Calculates the volume of a cuboid given its length, width, and height.
 *
 * @param length - The length of the cuboid.
 * @param width - The width of the cuboid.
 * @param height - The height of the cuboid.
 * @returns The volume of the cuboid.
 *
 * @example
 * ```typescript
 * const volume = VolumeOfCuboid(5, 3, 2); // returns 30
 * ```
 */
export function VolumeOfCuboid(
  length: number,
  width: number,
  height: number,
): number {
  if (length <= 0 || width <= 0 || height <= 0) {
    return 0;
  }
  return length * width * height;
}
