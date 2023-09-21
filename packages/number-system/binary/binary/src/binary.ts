import { BinaryToAscii } from "@ilihub/binary-to-ascii";
import { BinaryToDecimal } from "@ilihub/binary-to-decimal";
import { BinaryToHexadecimal } from "@ilihub/binary-to-hexadecimal";
import { BinaryToOctal } from "@ilihub/binary-to-octal";

/**
 * Represents a binary number and provides methods to convert it to other number systems.
 */
export class Binary {
  /**
   * Creates a new instance of Binary.
   *
   * @param binaryText - The binary number as a string.
   *
   * @example
   * ```typescript
   * const binary = new Binary('1010');
   * ```
   */
  constructor(private readonly binaryText: string) {}

  /**
   * Converts the binary number to its ASCII representation.
   *
   * @returns The ASCII representation of the binary number.
   *
   * @example
   * ```typescript
   * const binary = new Binary('01100001');
   * const ascii = binary.toAscii(); // 'a'
   * ```
   */
  public toAscii(): string {
    return BinaryToAscii(this.binaryText);
  }

  /**
   * Converts the binary number to its decimal representation.
   *
   * @returns The decimal representation of the binary number.
   *
   * @example
   * ```typescript
   * const binary = new Binary('1010');
   * const decimal = binary.toDecimal(); // 10
   * ```
   */
  public toDecimal(): number {
    return BinaryToDecimal(this.binaryText);
  }

  /**
   * Converts the binary number to its hexadecimal representation.
   *
   * @returns The hexadecimal representation of the binary number.
   *
   * @example
   * ```typescript
   * const binary = new Binary('1010');
   * const hexadecimal = binary.toHexadecimal(); // 'a'
   * ```
   */
  public toHexadecimal(): string {
    return BinaryToHexadecimal(this.binaryText);
  }

  /**
   * Converts the binary number to its octal representation.
   *
   * @returns The octal representation of the binary number.
   *
   * @example
   * ```typescript
   * const binary = new Binary('1010');
   * const octal = binary.toOctal(); // '12'
   * ```
   */
  public toOctal(): string {
    return BinaryToOctal(this.binaryText);
  }
}
