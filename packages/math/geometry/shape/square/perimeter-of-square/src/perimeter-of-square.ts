/**
 * Calculates the perimeter of a square given its side length.
 *
 * @param sideLength - The length of the square's sides.
 * @returns The perimeter of the square.
 *
 * @example
 * ```typescript
 * const perimeter = PerimeterOfSquare(5); // perimeter = 20
 * ```
 */
export function PerimeterOfSquare(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return 4 * sideLength;
}
