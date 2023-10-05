import { LateralSurfaceAreaOfCuboid } from "@ilihub/lateral-surface-area-of-cuboid";
import { PerimeterOfCuboid } from "@ilihub/perimeter-of-cuboid";
import {
  TotalSurfaceAreaOfCuboid,
  TotalSurfaceAreaOfCuboid as SurfaceAreaOfCuboid,
} from "@ilihub/total-surface-area-of-cuboid";
import { VolumeOfCuboid } from "@ilihub/volume-of-cuboid";

/**
 * Represents a cuboid shape in three-dimensional space.
 */
export class Cuboid {
  private length: number;
  private width: number;
  private height: number;

  /**
   * Creates a new instance of the Cuboid class.
   *
   * @param length - The length of the cuboid.
   * @param width - The width of the cuboid.
   * @param height - The height of the cuboid.
   *
   * @example
   * ```typescript
   * const cuboid = new Cuboid(2, 3, 4);
   * ```
   */
  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  /**
   * Calculates the lateral surface area of the cuboid.
   *
   * @returns The lateral surface area of the cuboid.
   *
   * @example
   * ```typescript
   * const cuboid = new Cuboid(5, 3, 2);
   * const lateralSurfaceArea = cuboid.lateralSurfaceArea(); // returns 32
   * ```
   */
  public lateralSurfaceArea(): number {
    return LateralSurfaceAreaOfCuboid(this.length, this.width, this.height);
  }

  /**
   * Calculates the perimeter of the cuboid.
   *
   * @returns The perimeter of the cuboid.
   *
   * @example
   * ```typescript
   * const cuboid = new Cuboid(5, 3, 2);
   * const perimeter = cuboid.perimeter(); // returns 40
   * ```
   */
  public perimeter(): number {
    return PerimeterOfCuboid(this.length, this.width, this.height);
  }

  /**
   * Calculates the surface area of the cuboid.
   *
   * @returns The surface area of the cuboid.
   *
   * @example
   * ```typescript
   * const cuboid = new Cuboid(5, 3, 2);
   * const surfaceArea = cuboid.surfaceArea(); // returns 62
   * ```
   */
  public surfaceArea(): number {
    return SurfaceAreaOfCuboid(this.length, this.width, this.height);
  }

  /**
   * Calculates the total surface area of the cuboid.
   *
   * @returns The total surface area of the cuboid.
   *
   * @example
   * ```typescript
   * const cuboid = new Cuboid(5, 3, 2);
   * const totalSurfaceArea = cuboid.totalSurfaceArea(); // returns 62
   * ```
   */
  public totalSurfaceArea(): number {
    return TotalSurfaceAreaOfCuboid(this.length, this.width, this.height);
  }

  /**
   * Calculates the volume of the cuboid.
   *
   * @returns The volume of the cuboid.
   *
   * @example
   * ```typescript
   * const cuboid = new Cuboid(5, 3, 2);
   * const volume = cuboid.volume(); // returns 30
   * ```
   */
  public volume(): number {
    return VolumeOfCuboid(this.length, this.width, this.height);
  }
}
