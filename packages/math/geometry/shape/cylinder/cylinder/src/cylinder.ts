import { LateralSurfaceAreaOfCylinder } from "@ilihub/lateral-surface-area-of-cylinder";
import { TotalSurfaceAreaOfCylinder } from "@ilihub/total-surface-area-of-cylinder";
import { VolumeOfCylinder } from "@ilihub/volume-of-cylinder";

/**
 * Represents a cylinder shape in 3D space.
 */
export class Cylinder {
  private radius: number;
  private height: number;

  /**
   * Creates a new instance of Cylinder.
   *
   * @param radius - The radius of the cylinder.
   * @param height - The height of the cylinder.
   *
   * @example
   * ```typescript
   * const cylinder = new Cylinder(5, 10);
   * ```
   */
  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
  }

  /**
   * Calculates the lateral surface area of the cylinder.
   *
   * @returns The lateral surface area of the cylinder.
   *
   * @example
   * ```typescript
   * const cylinder = new Cylinder(5, 10);
   * const lateralSurfaceArea = cylinder.lateralSurfaceArea(); // returns 314.1592653589793
   * ```
   */
  public lateralSurfaceArea(): number {
    return LateralSurfaceAreaOfCylinder(this.radius, this.height);
  }

  /**
   * Calculates the total surface area of the cylinder.
   *
   * @returns The total surface area of the cylinder.
   *
   * @example
   * ```typescript
   * const cylinder = new Cylinder(5, 10);
   * const totalSurfaceArea = cylinder.totalSurfaceArea(); // returns 471.23889803846896
   * ```
   */
  public totalSurfaceArea(): number {
    return TotalSurfaceAreaOfCylinder(this.radius, this.height);
  }

  /**
   * Calculates the volume of the cylinder.
   *
   * @returns The volume of the cylinder.
   *
   * @example
   * ```typescript
   * const cylinder = new Cylinder(5, 10);
   * const volume = cylinder.volume(); // returns 785.3981633974483
   * ```
   */
  public volume(): number {
    return VolumeOfCylinder(this.radius, this.height);
  }
}
