import { CurvedSurfaceAreaOfCone } from "@ilihub/curved-surface-area-of-cone";
import { TotalSurfaceAreaOfCone } from "@ilihub/total-surface-area-of-cone";
import { VolumeOfCone } from "@ilihub/volume-of-cone";

/**
 * Represents a cone shape in 3D space.
 */
export class Cone {
  private radius: number;
  private slantHeight: number;
  private height: number;

  /**
   * Creates a new instance of the Cone class.
   *
   * @param radius - The radius of the base of the cone.
   * @param slantHeight - The slant height of the cone.
   * @param height - The height of the cone. If not provided, it will be calculated using the radius and slant height.
   *
   * @example
   * ```typescript
   * const cone = new Cone(5, 10);
   * ```
   */
  constructor(radius: number, slantHeight: number, height?: number) {
    this.radius = radius;
    this.slantHeight = slantHeight;
    if (height) {
      this.height = height;
    } else {
      if (radius <= 0 || slantHeight <= 0) {
        this.height = 0;
        return;
      }
      this.height = Math.sqrt(Math.pow(slantHeight, 2) - Math.pow(radius, 2));
    }
  }

  /**
   * Calculates the curved surface area of the cone.
   *
   * @returns The curved surface area of the cone.
   *
   * @example
   * ```typescript
   * const cone = new Cone(5, 10);
   * const curvedSurfaceArea = cone.curvedSurfaceArea(); // returns 157.07963267948966
   * ```
   */
  public curvedSurfaceArea(): number {
    return CurvedSurfaceAreaOfCone(this.radius, this.slantHeight);
  }

  /**
   * Calculates the total surface area of the cone.
   *
   * @returns The total surface area of the cone.
   *
   * @example
   * ```typescript
   * const cone = new Cone(5, 10);
   * const totalSurfaceArea = cone.totalSurfaceArea(); // returns 235.61944901923448
   * ```
   */
  public totalSurfaceArea(): number {
    return TotalSurfaceAreaOfCone(this.radius, this.slantHeight);
  }

  /**
   * Calculates the volume of the cone.
   *
   * @returns The volume of the cone.
   *
   * @example
   * ```typescript
   * const cone = new Cone(5, 10);
   * const volume = cone.volume(); // returns 209.43951023931953
   * ```
   */
  public volume(): number {
    return VolumeOfCone(this.radius, this.height);
  }
}
