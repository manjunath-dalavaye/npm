/**
 * Calculates the total surface area of a cube given its side length.
 *
 * @param sideLength - The length of one side of the cube.
 * @returns The total surface area of the cube.
 *
 * @example
 * ```typescript
 * const totalSurfaceArea = TotalSurfaceAreaOfCube(3);
 * console.log(totalSurfaceArea); // 54
 * ```
 */
export function TotalSurfaceAreaOfCube(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return 6 * Math.pow(sideLength, 2);
}
