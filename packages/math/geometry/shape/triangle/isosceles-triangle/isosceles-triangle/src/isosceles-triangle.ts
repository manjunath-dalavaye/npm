import { AreaOfIsoscelesTriangle } from "@ilihub/area-of-isosceles-triangle";
import { PerimeterOfIsoscelesTriangle } from "@ilihub/perimeter-of-isosceles-triangle";

/**
 * Represents an isosceles triangle with a given side and base length.
 */
export class IsoscelesTriangle {
  private side: number;
  private base: number;

  /**
   * Creates a new instance of the IsoscelesTriangle class.
   *
   * @param side - The length of the two equal sides of the triangle.
   * @param base - The length of the base of the triangle.
   *
   * @example
   * ```typescript
   * const triangle = new IsoscelesTriangle(3, 4);
   * ```
   */
  constructor(side: number, base: number) {
    this.side = side;
    this.base = base;
  }

  /**
   * Calculates the area of the isosceles triangle.
   *
   * @returns The area of the triangle.
   *
   * @example
   * ```typescript
   * const triangle = new IsoscelesTriangle(3, 4);
   * const area = triangle.area(); // 4.47213595499958
   * ```
   */
  public area(): number {
    return AreaOfIsoscelesTriangle(this.side, this.base);
  }

  /**
   * Calculates the perimeter of the isosceles triangle.
   *
   * @returns The perimeter of the triangle.
   *
   * @example
   * ```typescript
   * const triangle = new IsoscelesTriangle(3, 4);
   * const perimeter = triangle.perimeter(); // 10
   * ```
   */
  public perimeter(): number {
    return PerimeterOfIsoscelesTriangle(this.side, this.base);
  }
}
