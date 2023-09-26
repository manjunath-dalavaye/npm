import { AreaOfSquare } from "@ilihub/area-of-square";
import { PerimeterOfSquare } from "@ilihub/perimeter-of-square";

/**
 * Represents a square shape with a given side length.
 *
 * @remarks
 * This class provides methods to calculate the area and perimeter of the square.
 *
 * @example
 * ```typescript
 * const square = new Square(5);
 * console.log(square.area()); // Output: 25
 * console.log(square.perimeter()); // Output: 20
 * ```
 */
export class Square {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  public area(): number {
    return AreaOfSquare(this.sideLength);
  }

  public perimeter(): number {
    return PerimeterOfSquare(this.sideLength);
  }
}
