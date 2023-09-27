/**
 * Calculates the area of a rhombus given its two diagonals.
 *
 * @param diagonal1 - The length of the first diagonal.
 * @param diagonal2 - The length of the second diagonal.
 * @returns The area of the rhombus.
 *
 * @example
 * ```typescript
 * const area = AreaOfRhombus(10, 12);
 * console.log(area); // Output: 60
 * ```
 */
export function AreaOfRhombus(diagonal1: number, diagonal2: number): number {
  if (diagonal1 <= 0 || diagonal2 <= 0) {
    return 0;
  }
  return (diagonal1 * diagonal2) / 2;
}
