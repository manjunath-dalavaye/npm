import { AreaOfParallelogram } from "@ilihub/area-of-parallelogram";
import { PerimeterOfParallelogram } from "@ilihub/perimeter-of-parallelogram";

/**
 * Represents a parallelogram shape and provides methods to calculate its area and perimeter.
 */
export class Parallelogram {
  /**
   * Calculates the area of the parallelogram.
   *
   * @param base - The length of the base of the parallelogram.
   * @param height - The height of the parallelogram.
   * @returns The area of the parallelogram.
   *
   * @example
   * ```typescript
   * const parallelogram = new Parallelogram();
   * const area = parallelogram.area(10, 5); // Returns 50
   * ```
   */
  public area(base: number, height: number): number {
    return AreaOfParallelogram(base, height);
  }

  /**
   * Calculates the perimeter of the parallelogram.
   *
   * @param base - The length of the base of the parallelogram.
   * @param sideHeight - The length of the side height of the parallelogram.
   * @returns The perimeter of the parallelogram.
   *
   * @example
   * ```typescript
   * const parallelogram = new Parallelogram();
   * const perimeter = parallelogram.perimeter(10, 5); // Returns 30
   * ```
   */
  public perimeter(base: number, sideHeight: number): number {
    return PerimeterOfParallelogram(base, sideHeight);
  }
}
