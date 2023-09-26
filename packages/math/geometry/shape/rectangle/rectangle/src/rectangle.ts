import { AreaOfRectangle } from "@ilihub/area-of-rectangle";
import { PerimeterOfRectangle } from "@ilihub/perimeter-of-rectangle";

/**
 * Represents a rectangle with a given length and width.
 *
 * @remarks
 * This class provides methods to calculate the area and perimeter of the rectangle.
 *
 * @example
 * ```typescript
 * const rectangle = new Rectangle(5, 10);
 * console.log(rectangle.area()); // Output: 50
 * console.log(rectangle.perimeter()); // Output: 30
 * ```
 */
export class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  public area(): number {
    return AreaOfRectangle(this.length, this.width);
  }

  public perimeter(): number {
    return PerimeterOfRectangle(this.length, this.width);
  }
}
