/**
 * Calculates the diagonal length of a cube given its side length.
 *
 * @param sideLength - The length of one side of the cube.
 * @returns The length of the diagonal of the cube.
 *
 * @example
 * ```typescript
 * const diagonal = DiagonalOfCube(3);
 * console.log(diagonal); // 5.196152422706632
 * ```
 */
export function DiagonalOfCube(sideLength: number): number {
  if (sideLength <= 0) {
    return 0;
  }
  return Math.sqrt(3) * sideLength;
}
