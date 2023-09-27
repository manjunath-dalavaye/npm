/**
 * Calculates the circumference of a sphere given its radius.
 *
 * @param radius - The radius of the sphere.
 * @returns The circumference of the sphere.
 *
 * @example
 * ```typescript
 * const radius = 5;
 * const circumference = CircumferenceOfSphere(radius);
 * console.log(circumference); // Output: 31.41592653589793
 * ```
 */
export function CircumferenceOfSphere(radius: number): number {
  if (radius <= 0) {
    return 0;
  }
  return 2 * Math.PI * radius;
}
