import { RankineToKelvin } from "@ilihub/rankine-to-kelvin";
import { RankineToCelsius } from "@ilihub/rankine-to-celsius";
import { RankineToFahrenheit } from "@ilihub/rankine-to-fahrenheit";
import { RankineToReaumur } from "@ilihub/rankine-to-reaumur";

/**
 * Represents a temperature in Rankine scale.
 */
export class Rankine {
  /**
   * Creates a new instance of Rankine.
   *
   * @param rankine - The temperature value in Rankine scale.
   *
   * @example
   * ```typescript
   * const rankineTemp = new Rankine(671.67);
   * ```
   */
  constructor(private readonly rankine: number) {}

  /**
   * Converts the temperature from Rankine to Kelvin.
   *
   * @returns The temperature value in Kelvin scale.
   *
   * @example
   * ```typescript
   * const rankineTemp = new Rankine(671.67);
   * const kelvinTemp = rankineTemp.toKelvin(); // returns 373.15
   * ```
   */
  public toKelvin(): number {
    return RankineToKelvin(this.rankine);
  }

  /**
   * Converts the temperature from Rankine to Celsius.
   *
   * @returns The temperature value in Celsius scale.
   *
   * @example
   * ```typescript
   * const rankineTemp = new Rankine(671.67);
   * const celsiusTemp = rankineTemp.toCelsius(); // returns 100
   * ```
   */
  public toCelsius(): number {
    return RankineToCelsius(this.rankine);
  }

  /**
   * Converts the temperature from Rankine to Fahrenheit.
   *
   * @returns The temperature value in Fahrenheit scale.
   *
   * @example
   * ```typescript
   * const rankineTemp = new Rankine(671.67);
   * const fahrenheitTemp = rankineTemp.toFahrenheit(); // returns 212
   * ```
   */
  public toFahrenheit(): number {
    return RankineToFahrenheit(this.rankine);
  }

  /**
   * Converts the temperature from Rankine to Reaumur.
   *
   * @returns The temperature value in Reaumur scale.
   *
   * @example
   * ```typescript
   * const rankineTemp = new Rankine(671.67);
   * const reaumurTemp = rankineTemp.toReaumur(); // returns 80
   * ```
   */
  public toReaumur(): number {
    return RankineToReaumur(this.rankine);
  }
}
