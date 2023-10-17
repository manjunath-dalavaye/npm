import { FahrenheitToKelvin } from "@ilihub/fahrenheit-to-kelvin";
import { FahrenheitToCelsius } from "@ilihub/fahrenheit-to-celsius";
import { FahrenheitToRankine } from "@ilihub/fahrenheit-to-rankine";
import { FahrenheitToReaumur } from "@ilihub/fahrenheit-to-reaumur";

/**
 * Represents a temperature in Fahrenheit.
 */
export class Fahrenheit {
  /**
   * Creates a new instance of Fahrenheit.
   *
   * @param fahrenheit - The temperature in Fahrenheit.
   *
   * @example
   * ```typescript
   * const temp = new Fahrenheit(212);
   * ```
   */
  constructor(private readonly fahrenheit: number) {}

  /**
   * Converts the temperature to Kelvin.
   *
   * @returns The temperature in Kelvin.
   *
   * @example
   * ```typescript
   * const temp = new Fahrenheit(212);
   * const kelvin = temp.toKelvin(); // 373.15
   * ```
   */
  public toKelvin(): number {
    return FahrenheitToKelvin(this.fahrenheit);
  }

  /**
   * Converts the temperature to Celsius.
   *
   * @returns The temperature in Celsius.
   *
   * @example
   * ```typescript
   * const temp = new Fahrenheit(212);
   * const celsius = temp.toCelsius(); // 100
   * ```
   */
  public toCelsius(): number {
    return FahrenheitToCelsius(this.fahrenheit);
  }

  /**
   * Converts the temperature to Rankine.
   *
   * @returns The temperature in Rankine.
   *
   * @example
   * ```typescript
   * const temp = new Fahrenheit(212);
   * const rankine = temp.toRankine(); // 671.67
   * ```
   */
  public toRankine(): number {
    return FahrenheitToRankine(this.fahrenheit);
  }

  /**
   * Converts the temperature to Reaumur.
   *
   * @returns The temperature in Reaumur.
   *
   * @example
   * ```typescript
   * const temp = new Fahrenheit(212);
   * const reaumur = temp.toReaumur(); // 80
   * ```
   */
  public toReaumur(): number {
    return FahrenheitToReaumur(this.fahrenheit);
  }
}
