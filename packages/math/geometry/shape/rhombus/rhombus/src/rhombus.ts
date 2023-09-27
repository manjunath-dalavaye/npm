import { AreaOfRhombus } from "@ilihub/area-of-rhombus";
import { PerimeterOfRhombus } from "@ilihub/perimeter-of-rhombus";

/**
 * Represents a Rhombus shape and provides methods to calculate its area and perimeter.
 */
export class Rhombus {
  /**
   * Calculates the area of the Rhombus using its two diagonals.
   *
   * @param diagonal1 - The length of the first diagonal.
   * @param diagonal2 - The length of the second diagonal.
   * @returns The area of the Rhombus.
   *
   * @example
   * ```typescript
   * const rhombus = new Rhombus();
   * const area = rhombus.area(6, 8); // Returns 24
   * ```
   */
  public area(diagonal1: number, diagonal2: number): number {
    return AreaOfRhombus(diagonal1, diagonal2);
  }

  /**
   * Calculates the perimeter of the Rhombus using its side length.
   *
   * @param sideLength - The length of the side of the Rhombus.
   * @returns The perimeter of the Rhombus.
   *
   * @example
   * ```typescript
   * const rhombus = new Rhombus();
   * const perimeter = rhombus.perimeter(5); // Returns 20
   * ```
   */
  public perimeter(sideLength: number): number {
    return PerimeterOfRhombus(sideLength);
  }
}
