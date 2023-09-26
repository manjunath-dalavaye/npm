/**
 * Calculates the area of a rectangle given its length and width.
 *
 * @param length - The length of the rectangle.
 * @param width - The width of the rectangle.
 * @returns The area of the rectangle.
 *
 * @example
 * ```typescript
 * const area = AreaOfRectangle(5, 10);
 * console.log(area); // Output: 50
 * ```
 */
export function AreaOfRectangle(length: number, width: number): number {
  if (length <= 0 || width <= 0) {
    return 0;
  }
  return length * width;
}
