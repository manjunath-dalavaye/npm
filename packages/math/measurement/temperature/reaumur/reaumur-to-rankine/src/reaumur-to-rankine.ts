/**
 * Converts a temperature value in Reaumur to Rankine.
 *
 * @param reaumur - The temperature value in Reaumur to be converted.
 * @returns The temperature value converted to Rankine.
 *
 * @example
 * ```typescript
 * const rankine = ReaumurToRankine(80); // 671.67
 * ```
 */
export function ReaumurToRankine(reaumur: number): number {
  return ((reaumur + 218.52) * 9) / 4;
}

export { ReaumurToRankine as Re2R };
