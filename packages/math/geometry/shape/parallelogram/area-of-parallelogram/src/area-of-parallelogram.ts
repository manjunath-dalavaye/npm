/**
 * Calculates the area of a parallelogram given its base and height.
 *
 * @param base - The length of the base of the parallelogram.
 * @param height - The height of the parallelogram.
 * @returns The area of the parallelogram.
 *
 * @example
 * ```typescript
 * const area = AreaOfParallelogram(5, 10);
 * console.log(area); // Output: 50
 * ```
 */
export function AreaOfParallelogram(base: number, height: number): number {
  if (base <= 0 || height <= 0) {
    return 0;
  }
  return base * height;
}
