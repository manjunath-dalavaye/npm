/**
 * Calculates the area of a square given its side length.
 *
 * @param sideLength - The length of the square's sides.
 * @returns The area of the square.
 *
 * @example
 * ```typescript
 * const area = AreaOfSquare(5);
 * console.log(area); // Output: 25
 * ```
 */
export function AreaOfSquare(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return sideLength ** 2;
}
