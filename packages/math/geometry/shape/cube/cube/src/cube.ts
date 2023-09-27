import { DiagonalOfCube } from "@ilihub/diagonal-of-cube";
import { LateralSurfaceAreaOfCube } from "@ilihub/lateral-surface-area-of-cube";
import { TotalSurfaceAreaOfCube } from "@ilihub/total-surface-area-of-cube";
import { VolumeOfCube } from "@ilihub/volume-of-cube";

/**
 * Represents a cube shape with a given side length.
 *
 * @example
 * ```typescript
 * const cube = new Cube(5);
 * console.log(cube.diagonal()); // 8.660254037844386
 * console.log(cube.lateralSurfaceArea()); // 100
 * console.log(cube.totalSurfaceArea()); // 150
 * console.log(cube.volume()); // 125
 * ```
 */
export class Cube {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  public diagonal(): number {
    return DiagonalOfCube(this.sideLength);
  }

  public lateralSurfaceArea(): number {
    return LateralSurfaceAreaOfCube(this.sideLength);
  }

  public totalSurfaceArea(): number {
    return TotalSurfaceAreaOfCube(this.sideLength);
  }

  public volume(): number {
    return VolumeOfCube(this.sideLength);
  }
}
