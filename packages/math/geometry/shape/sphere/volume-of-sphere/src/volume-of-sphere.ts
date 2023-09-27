/**
 * Calculates the volume of a sphere given its radius.
 *
 * @param radius - The radius of the sphere.
 * @returns The volume of the sphere.
 *
 * @example
 * ```typescript
 * const radius = 5;
 * const volume = VolumeOfSphere(radius);
 * console.log(volume); // Output: 523.5987755982989
 * ```
 */
export function VolumeOfSphere(radius: number): number {
  if (radius < 0) {
    return 0;
  }
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
