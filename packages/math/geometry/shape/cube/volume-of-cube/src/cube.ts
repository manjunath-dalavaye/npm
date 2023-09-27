/**
 * Calculates the volume of a cube given the length of its sides.
 *
 * @param sideLength - The length of the sides of the cube.
 * @returns The volume of the cube.
 *
 * @example
 * ```typescript
 * const volume = VolumeOfCube(3);
 * console.log(volume); // 27
 * ```
 */
export function VolumeOfCube(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return Math.pow(sideLength, 3);
}
