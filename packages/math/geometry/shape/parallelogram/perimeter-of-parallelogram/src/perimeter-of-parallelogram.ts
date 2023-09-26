/**
 * Calculates the perimeter of a parallelogram given its base and side length.
 *
 * @param base - The length of the base of the parallelogram.
 * @param sideLength - The length of one of the sides of the parallelogram.
 * @returns The perimeter of the parallelogram.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfParallelogram(5, 8);
 * console.log(perimeter); // Output: 26
 * ```
 */
export function PerimeterOfParallelogram(
  base: number,
  sideLength: number,
): number {
  if (base <= 0 || sideLength <= 0) {
    return 0;
  }
  return 2 * (base + sideLength);
}
