import { AreaOfScaleneTriangle } from "@ilihub/area-of-scalene-triangle";
import { PerimeterOfScaleneTriangle } from "@ilihub/perimeter-of-scalene-triangle";

/**
 * Represents a scalene triangle with three sides of different lengths.
 */
export class ScaleneTriangle {
  /**
   * The length of the first side of the triangle.
   */
  private readonly s1: number;
  /**
   * The length of the second side of the triangle.
   */
  private readonly s2: number;
  /**
   * The length of the third side of the triangle.
   */
  private readonly s3: number;

  /**
   * Creates a new instance of the ScaleneTriangle class.
   *
   * @param s1 - The length of the first side of the triangle.
   * @param s2 - The length of the second side of the triangle.
   * @param s3 - The length of the third side of the triangle.
   *
   * @example
   * ```typescript
   * const triangle = new ScaleneTriangle(3, 4, 5);
   * ```
   */
  constructor(s1: number, s2: number, s3: number) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  /**
   * Calculates the area of the scalene triangle.
   *
   * @returns The area of the scalene triangle.
   *
   * @example
   * ```typescript
   * const triangle = new ScaleneTriangle(3, 4, 5);
   * const area = triangle.area(); // 6
   * ```
   */
  public area(): number {
    return AreaOfScaleneTriangle(this.s1, this.s2, this.s3);
  }

  /**
   * Calculates the perimeter of the scalene triangle.
   *
   * @returns The perimeter of the scalene triangle.
   *
   * @example
   * ```typescript
   * const triangle = new ScaleneTriangle(3, 4, 5);
   * const perimeter = triangle.perimeter(); // 12
   * ```
   */
  public perimeter(): number {
    return PerimeterOfScaleneTriangle(this.s1, this.s2, this.s3);
  }
}
