import { DecimalToAscii } from "@ilihub/decimal-to-ascii";
import { DecimalToBinary } from "@ilihub/decimal-to-binary";
import { DecimalToHexadecimal } from "@ilihub/decimal-to-hexadecimal";
import { DecimalToOctal } from "@ilihub/decimal-to-octal";

/**
 * Represents a decimal number and provides methods to convert it to other number systems.
 */
export class Decimal {
  /**
   * Creates a new instance of Decimal.
   *
   * @param decimalNumber - The decimal number to be represented.
   *
   * @example
   * ```typescript
   * const decimal = new Decimal(10);
   * ```
   */
  constructor(private readonly decimalNumber: number) {}

  /**
   * Converts the decimal number to its ASCII representation.
   *
   * @returns The ASCII representation of the decimal number.
   *
   * @example
   * ```typescript
   * const decimal = new Decimal(65);
   * const ascii = decimal.toAscii(); // returns 'A'
   * ```
   */
  public toAscii(): string {
    return DecimalToAscii(this.decimalNumber);
  }

  /**
   * Converts the decimal number to its binary representation.
   *
   * @returns The binary representation of the decimal number.
   *
   * @example
   * ```typescript
   * const decimal = new Decimal(10);
   * const binary = decimal.toBinary(); // returns '1010'
   * ```
   */
  public toBinary(): string {
    return DecimalToBinary(this.decimalNumber);
  }

  /**
   * Converts the decimal number to its hexadecimal representation.
   *
   * @returns The hexadecimal representation of the decimal number.
   *
   * @example
   * ```typescript
   * const decimal = new Decimal(255);
   * const hexadecimal = decimal.toHexadecimal(); // returns 'FF'
   * ```
   */
  public toHexadecimal(): string {
    return DecimalToHexadecimal(this.decimalNumber);
  }

  /**
   * Converts the decimal number to its octal representation.
   *
   * @returns The octal representation of the decimal number.
   *
   * @example
   * ```typescript
   * const decimal = new Decimal(8);
   * const octal = decimal.toOctal(); // returns '10'
   * ```
   */
  public toOctal(): string {
    return DecimalToOctal(this.decimalNumber);
  }
}
