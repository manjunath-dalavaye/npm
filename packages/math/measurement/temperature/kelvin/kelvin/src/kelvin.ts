import { KelvinToCelsius } from "@ilihub/kelvin-to-celsius";
import { KelvinToFahrenheit } from "@ilihub/kelvin-to-fahrenheit";
import { KelvinToRankine } from "@ilihub/kelvin-to-rankine";
import { KelvinToReaumur } from "@ilihub/kelvin-to-reaumur";

/**
 * Represents a temperature in Kelvin.
 */
export class Kelvin {
  /**
   * Creates a new instance of Kelvin.
   *
   * @param kelvin - The temperature in Kelvin.
   *
   * @example
   * ```typescript
   * const kelvin = new Kelvin(373.15);
   * ```
   */
  constructor(private readonly kelvin: number) {}

  /**
   * Converts the temperature from Kelvin to Celsius.
   *
   * @returns The temperature in Celsius.
   *
   * @example
   * ```typescript
   * const kelvin = new Kelvin(373.15);
   * const celsius = kelvin.toCelsius(); // 100
   * ```
   */
  public toCelsius(): number {
    return KelvinToCelsius(this.kelvin);
  }

  /**
   * Converts the temperature from Kelvin to Fahrenheit.
   *
   * @returns The temperature in Fahrenheit.
   *
   * @example
   * ```typescript
   * const kelvin = new Kelvin(373.15);
   * const fahrenheit = kelvin.toFahrenheit(); // 212
   * ```
   */
  public toFahrenheit(): number {
    return KelvinToFahrenheit(this.kelvin);
  }

  /**
   * Converts the temperature from Kelvin to Rankine.
   *
   * @returns The temperature in Rankine.
   *
   * @example
   * ```typescript
   * const kelvin = new Kelvin(373.15);
   * const rankine = kelvin.toRankine(); // 671.67
   * ```
   */
  public toRankine(): number {
    return KelvinToRankine(this.kelvin);
  }

  /**
   * Converts the temperature from Kelvin to Reaumur.
   *
   * @returns The temperature in Reaumur.
   *
   * @example
   * ```typescript
   * const kelvin = new Kelvin(373.15);
   * const reaumur = kelvin.toReaumur(); // 80
   * ```
   */
  public toReaumur(): number {
    return KelvinToReaumur(this.kelvin);
  }
}
