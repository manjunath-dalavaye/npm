import { AreaOfRightTriangle } from "@ilihub/area-of-right-triangle";
import { PerimeterOfRightTriangle } from "@ilihub/perimeter-of-right-triangle";

/**
 * Represents a right triangle with a base and height.
 */
export class RightTriangle {
  /**
   * The length of the base of the right triangle.
   */
  private readonly base: number;
  /**
   * The length of the height of the right triangle.
   */
  private readonly height: number;

  /**
   * Creates a new instance of the RightTriangle class.
   *
   * @param base - The length of the base of the right triangle.
   * @param height - The length of the height of the right triangle.
   *
   * @example
   * ```typescript
   * const triangle = new RightTriangle(3, 4);
   * ```
   */
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  /**
   * Calculates the area of the right triangle.
   *
   * @returns The area of the right triangle.
   *
   * @example
   * ```typescript
   * const triangle = new RightTriangle(3, 4);
   * const area = triangle.area(); // 6
   * ```
   */
  public area(): number {
    return AreaOfRightTriangle(this.base, this.height);
  }

  /**
   * Calculates the perimeter of the right triangle.
   *
   * @returns The perimeter of the right triangle.
   *
   * @example
   * ```typescript
   * const triangle = new RightTriangle(3, 4);
   * const perimeter = triangle.perimeter(); // 12
   * ```
   */
  public perimeter(): number {
    return PerimeterOfRightTriangle(this.base, this.height);
  }
}
