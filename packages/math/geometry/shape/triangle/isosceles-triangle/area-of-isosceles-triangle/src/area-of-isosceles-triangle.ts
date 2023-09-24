/**
 * Calculates the area of an isosceles triangle given the length of its two equal sides and the length of its base.
 *
 * @param side - The length of one of the equal sides of the isosceles triangle.
 * @param base - The length of the base of the isosceles triangle.
 * @returns The area of the isosceles triangle.
 *
 * @example
 * ```typescript
 * const area = AreaOfIsoscelesTriangle(3, 4); // 4.47213595499958
 * ```
 */
export function AreaOfIsoscelesTriangle(side: number, base: number): number {
  if (side <= 0 || base <= 0) {
    return 0;
  }
  const height = Math.sqrt(side ** 2 - (base / 2) ** 2);
  const area = (base * height) / 2;
  return area;
}
