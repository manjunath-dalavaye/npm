/**
 * Calculates the circumference of a circle given its radius.
 *
 * @param radius - The radius of the circle.
 * @returns The circumference of the circle.
 *
 * @example
 * ```typescript
 * const circumference = CircumferenceOfCircle(5); // 31.41592653589793
 * ```
 */
export function CircumferenceOfCircle(radius: number): number {
  if (radius <= 0) {
    return 0;
  }
  const circumference = 2 * Math.PI * radius;
  return circumference;
}
