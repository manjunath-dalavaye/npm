import { AsciiToBinary } from "@ilihub/ascii-to-binary";
import { AsciiToDecimal } from "@ilihub/ascii-to-decimal";
import { AsciiToHexadecimal } from "@ilihub/ascii-to-hexadecimal";
import { AsciiToOctal } from "@ilihub/ascii-to-octal";

/**
 * Represents an ASCII text and provides methods to convert it to different number systems.
 */
export class Ascii {
  /**
   * Creates an instance of Ascii.
   *
   * @param asciiText - The ASCII text to be converted.
   *
   * @example
   * ```typescript
   * const ascii = new Ascii('Hello World!');
   * ```
   */
  constructor(private readonly asciiText: string) {}

  /**
   * Converts the ASCII text to binary.
   *
   * @returns The binary representation of the ASCII text.
   *
   * @example
   * ```typescript
   * const ascii = new Ascii('Hello World!');
   * const binary = ascii.toBinary(); // '01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001'
   * ```
   */
  public toBinary(): string {
    return AsciiToBinary(this.asciiText);
  }

  /**
   * Converts the ASCII text to decimal.
   *
   * @returns An array of decimal values representing the ASCII text.
   *
   * @example
   * ```typescript
   * const ascii = new Ascii('Hello World!');
   * const decimal = ascii.toDecimal(); // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
   * ```
   */
  public toDecimal(): number[] {
    return AsciiToDecimal(this.asciiText);
  }

  /**
   * Converts the ASCII text to hexadecimal.
   *
   * @returns The hexadecimal representation of the ASCII text.
   *
   * @example
   * ```typescript
   * const ascii = new Ascii('Hello World!');
   * const hexadecimal = ascii.toHexadecimal(); // '48656c6c6f20576f726c6421'
   * ```
   */
  public toHexadecimal(): string {
    return AsciiToHexadecimal(this.asciiText);
  }

  /**
   * Converts the ASCII text to octal.
   *
   * @returns The octal representation of the ASCII text.
   *
   * @example
   * ```typescript
   * const ascii = new Ascii('Hello World!');
   * const octal = ascii.toOctal(); // '110 145 154 154 157  040 127 157 162 154 144 041'
   * ```
   */
  public toOctal(): string {
    return AsciiToOctal(this.asciiText);
  }
}
