import { AreaOfSemiCircle } from "@ilihub/area-of-semi-circle";
import { PerimeterOfSemiCircle } from "@ilihub/perimeter-of-semi-circle";

/**
 * Represents a semi-circle shape with a given radius.
 */
export class SemiCircle {
  /**
   * The radius of the semi-circle.
   */
  private radius: number;

  /**
   * Creates a new instance of the SemiCircle class.
   *
   * @param radius - The radius of the semi-circle.
   *
   * @example
   * ```typescript
   * const semiCircle = new SemiCircle(5);
   * ```
   */
  constructor(radius: number) {
    this.radius = radius;
  }

  /**
   * Calculates the area of the semi-circle.
   *
   * @returns The area of the semi-circle.
   *
   * @example
   * ```typescript
   * const semiCircle = new SemiCircle(5);
   * const area = semiCircle.area(); // returns 39.269908169872416
   * ```
   */
  public area(): number {
    return AreaOfSemiCircle(this.radius);
  }

  /**
   * Calculates the perimeter of the semi-circle.
   *
   * @returns The perimeter of the semi-circle.
   *
   * @example
   * ```typescript
   * const semiCircle = new SemiCircle(5);
   * const perimeter = semiCircle.perimeter(); // returns 25.707963267948966
   * ```
   */
  public perimeter(): number {
    return PerimeterOfSemiCircle(this.radius);
  }
}
