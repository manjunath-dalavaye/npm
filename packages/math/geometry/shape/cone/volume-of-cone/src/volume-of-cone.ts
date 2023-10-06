/**
 * Calculates the volume of a cone given its radius and height.
 *
 * @param radius - The radius of the cone.
 * @param height - The height of the cone.
 * @returns The volume of the cone.
 *
 * @example
 * ```typescript
 * VolumeOfCone(5, 10); // 261.79938779914943
 * ```
 */
export function VolumeOfCone(radius: number, height: number): number {
  if (radius <= 0 || height <= 0) {
    return 0;
  }
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  return volume;
}
