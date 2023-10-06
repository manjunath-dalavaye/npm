/**
 * Calculates the volume of a cylinder.
 *
 * @param radius - The radius of the cylinder.
 * @param height - The height of the cylinder.
 * @returns The volume of the cylinder.
 *
 * @example
 * ```typescript
 * const volume = VolumeOfCylinder(5, 10);
 * console.log(volume); // Output: 785.3981633974483
 * ```
 */
export function VolumeOfCylinder(radius: number, height: number): number {
  if (radius <= 0 || height <= 0) {
    return 0;
  }
  const volume = Math.PI * Math.pow(radius, 2) * height;
  return volume;
}
