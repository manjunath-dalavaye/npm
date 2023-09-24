import { AreaOfEquilateralTriangle } from "@ilihub/area-of-equilateral-triangle";
import { PerimeterOfEquilateralTriangle } from "@ilihub/perimeter-of-equilateral-triangle";

/**
 * Represents an equilateral triangle with a given side length.
 */
export class EquilateralTriangle {
  /**
   * The length of each side of the equilateral triangle.
   */
  private readonly side: number;

  /**
   * Creates a new equilateral triangle with the given side length.
   *
   * @param side - The length of each side of the equilateral triangle.
   *
   * @example
   * ```typescript
   * const triangle = new EquilateralTriangle(3);
   * ```
   */
  constructor(side: number) {
    this.side = side;
  }

  /**
   * Calculates the area of the equilateral triangle.
   *
   * @returns The area of the equilateral triangle.
   *
   * @example
   * ```typescript
   * const triangle = new EquilateralTriangle(3);
   * const area = triangle.area(); // 3.8971143170299736
   * ```
   */
  public area(): number {
    return AreaOfEquilateralTriangle(this.side);
  }

  /**
   * Calculates the perimeter of the equilateral triangle.
   *
   * @returns The perimeter of the equilateral triangle.
   *
   * @example
   * ```typescript
   * const triangle = new EquilateralTriangle(3);
   * const perimeter = triangle.perimeter(); // 9
   * ```
   */
  public perimeter(): number {
    return PerimeterOfEquilateralTriangle(this.side);
  }
}
