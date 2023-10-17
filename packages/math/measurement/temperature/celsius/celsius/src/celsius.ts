import { CelsiusToKelvin } from "@ilihub/celsius-to-kelvin";
import { CelsiusToFahrenheit } from "@ilihub/celsius-to-fahrenheit";
import { CelsiusToRankine } from "@ilihub/celsius-to-rankine";
import { CelsiusToReaumur } from "@ilihub/celsius-to-reaumur";

/**
 * Represents a temperature in Celsius.
 */
export class Celsius {
  /**
   * Creates a new instance of the Celsius class.
   *
   * @param celsius - The temperature in Celsius.
   *
   * ```typescript
   * const celsius = new Celsius(100);
   * ```
   */
  constructor(private readonly celsius: number) {}

  /**
   * Converts the temperature from Celsius to Kelvin.
   *
   * @returns The temperature in Kelvin.
   *
   * @example
   * ```typescript
   * const celsius = new Celsius(100);
   * const kelvin = celsius.toKelvin(); // 373.15
   * ```
   */
  public toKelvin(): number {
    return CelsiusToKelvin(this.celsius);
  }

  /**
   * Converts the temperature from Celsius to Fahrenheit.
   *
   * @returns The temperature in Fahrenheit.
   *
   * @example
   * ```typescript
   * const celsius = new Celsius(100);
   * const fahrenheit = celsius.toFahrenheit(); // 212
   * ```
   */
  public toFahrenheit(): number {
    return CelsiusToFahrenheit(this.celsius);
  }

  /**
   * Converts the temperature from Celsius to Rankine.
   *
   * @returns The temperature in Rankine.
   *
   * @example
   * ```typescript
   * const celsius = new Celsius(100);
   * const rankine = celsius.toRankine(); // 671.67
   * ```
   */
  public toRankine(): number {
    return CelsiusToRankine(this.celsius);
  }

  /**
   * Converts the temperature from Celsius to Reaumur.
   *
   * @returns The temperature in Reaumur.
   *
   * @example
   * ```typescript
   * const celsius = new Celsius(100);
   * const reaumur = celsius.toReaumur(); // 80
   * ```
   */
  public toReaumur(): number {
    return CelsiusToReaumur(this.celsius);
  }
}
