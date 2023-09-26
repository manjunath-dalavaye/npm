/**
 * Calculates the perimeter of a rectangle given its length and width.
 *
 * @param length - The length of the rectangle.
 * @param width - The width of the rectangle.
 * @returns The perimeter of the rectangle.
 *
 * @example
 * ```typescript
 * const length = 5;
 * const width = 3;
 * const perimeter = PerimeterOfRectangle(length, width);
 * console.log(perimeter); // Output: 16
 * ```
 */
export function PerimeterOfRectangle(length: number, width: number): number {
  if (length <= 0 || width <= 0) {
    return 0;
  }
  return 2 * (length + width);
}
