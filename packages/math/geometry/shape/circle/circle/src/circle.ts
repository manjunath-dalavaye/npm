import { AreaOfCircle } from "@ilihub/area-of-circle";
import { CircumferenceOfCircle } from "@ilihub/circumference-of-circle";

/**
 * Represents a circle shape with a given radius.
 */
export class Circle {
  /**
   * The radius of the circle.
   */
  private radius: number;

  /**
   * Creates a new circle with the given radius.
   *
   * @param radius - The radius of the circle.
   *
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * ```
   */
  constructor(radius: number) {
    this.radius = radius;
  }

  /**
   * Calculates the area of the circle.
   *
   * @returns The area of the circle.
   *
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * const area = circle.area(); // returns 78.53981633974483
   * ```
   */
  public area(): number {
    return AreaOfCircle(this.radius);
  }

  /**
   * Calculates the circumference of the circle.
   *
   * @returns The circumference of the circle.
   *
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * const circumference = circle.circumference(); // returns 31.41592653589793
   * ```
   */
  public circumference(): number {
    return CircumferenceOfCircle(this.radius);
  }
}
