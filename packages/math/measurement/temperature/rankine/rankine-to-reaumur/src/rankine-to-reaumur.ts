/**
 * Converts a temperature value in Rankine to Reaumur.
 *
 * @param rankine - The temperature value in Rankine.
 * @returns The temperature value converted to Reaumur.
 *
 * @example
 * ```typescript
 * const reaumur = RankineToReaumur(671.67); // 80
 * ```
 */
export function RankineToReaumur(rankine: number): number {
  return ((rankine - 491.67) * 4) / 9;
}

export { RankineToReaumur as R2Re };
