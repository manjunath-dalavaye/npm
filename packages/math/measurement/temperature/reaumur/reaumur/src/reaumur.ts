import { ReaumurToKelvin } from "@ilihub/reaumur-to-kelvin";
import { ReaumurToCelsius } from "@ilihub/reaumur-to-celsius";
import { ReaumurToFahrenheit } from "@ilihub/reaumur-to-fahrenheit";
import { ReaumurToRankine } from "@ilihub/reaumur-to-rankine";

/**
 * Represents a temperature in degrees Reaumur.
 */
export class Reaumur {
  /**
   * Creates a new instance of the Reaumur class.
   *
   * @param reaumur - The temperature in degrees Reaumur.
   *
   * @example
   * ```typescript
   * const temp = new Reaumur(80);
   * ```
   */
  constructor(private readonly reaumur: number) {}

  /**
   * Converts the temperature to Kelvin.
   *
   * @returns The temperature in Kelvin.
   *
   * @example
   * ```typescript
   * const temp = new Reaumur(80);
   * const kelvin = temp.toKelvin(); // returns 373.15
   * ```
   */
  public toKelvin(): number {
    return ReaumurToKelvin(this.reaumur);
  }

  /**
   * Converts the temperature to Celsius.
   *
   * @returns The temperature in Celsius.
   *
   * @example
   * ```typescript
   * const temp = new Reaumur(80);
   * const celsius = temp.toCelsius(); // returns 100
   * ```
   */
  public toCelsius(): number {
    return ReaumurToCelsius(this.reaumur);
  }

  /**
   * Converts the temperature to Fahrenheit.
   *
   * @returns The temperature in Fahrenheit.
   *
   * @example
   * ```typescript
   * const temp = new Reaumur(80);
   * const fahrenheit = temp.toFahrenheit(); // returns 212
   * ```
   */
  public toFahrenheit(): number {
    return ReaumurToFahrenheit(this.reaumur);
  }

  /**
   * Converts the temperature to Rankine.
   *
   * @returns The temperature in Rankine.
   *
   * @example
   * ```typescript
   * const temp = new Reaumur(80);
   * const rankine = temp.toRankine(); // returns 671.67
   * ```
   */
  public toRankine(): number {
    return ReaumurToRankine(this.reaumur);
  }
}
