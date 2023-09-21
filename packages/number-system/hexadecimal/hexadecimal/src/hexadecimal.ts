import { HexadecimalToAscii } from "@ilihub/hexadecimal-to-ascii";
import { HexadecimalToBinary } from "@ilihub/hexadecimal-to-binary";
import { HexadecimalToDecimal } from "@ilihub/hexadecimal-to-decimal";
import { HexadecimalToOctal } from "@ilihub/hexadecimal-to-octal";

/**
 * Represents a hexadecimal number and provides methods to convert it to other number systems.
 */
export class Hexadecimal {
  /**
   * Creates a new instance of the Hexadecimal class.
   *
   * @param hexadecimalText - The hexadecimal number as a string.
   *
   * @example
   * ```typescript
   * const hex = new Hexadecimal('1A');
   * ```
   */
  constructor(private readonly hexadecimalText: string) {}

  /**
   * Converts the hexadecimal number to its ASCII representation.
   *
   * @returns The ASCII representation of the hexadecimal number.
   *
   * @example
   * ```typescript
   * const hex = new Hexadecimal('48656c6c6f20576f726c64');
   * const ascii = hex.toAscii(); // 'Hello World'
   * ```
   */
  public toAscii(): string {
    return HexadecimalToAscii(this.hexadecimalText);
  }

  /**
   * Converts the hexadecimal number to its binary representation.
   *
   * @returns The binary representation of the hexadecimal number.
   *
   * @example
   * ```typescript
   * const hex = new Hexadecimal('1A');
   * const binary = hex.toBinary(); // '00011010'
   * ```
   */
  public toBinary(): string {
    return HexadecimalToBinary(this.hexadecimalText);
  }

  /**
   * Converts the hexadecimal number to its decimal representation.
   *
   * @returns The decimal representation of the hexadecimal number.
   *
   * @example
   * ```typescript
   * const hex = new Hexadecimal('1A');
   * const decimal = hex.toDecimal(); // 26
   * ```
   */
  public toDecimal(): number {
    return HexadecimalToDecimal(this.hexadecimalText);
  }

  /**
   * Converts the hexadecimal number to its octal representation.
   *
   * @returns The octal representation of the hexadecimal number.
   *
   * @example
   * ```typescript
   * const hex = new Hexadecimal('1A');
   * const octal = hex.toOctal(); // '32'
   * ```
   */
  public toOctal(): string {
    return HexadecimalToOctal(this.hexadecimalText);
  }
}
