/**
 * Calculates the lateral surface area of a cube with the given side length.
 *
 * @param sideLength - The length of a side of the cube.
 * @returns The lateral surface area of the cube.
 *
 * @example
 * ```typescript
 * const lateralSurfaceArea = LateralSurfaceAreaOfCube(3);
 * console.log(lateralSurfaceArea); // 54
 * ```
 */
export function LateralSurfaceAreaOfCube(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return 4 * Math.pow(sideLength, 2);
}
