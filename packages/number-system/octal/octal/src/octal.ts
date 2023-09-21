import { OctalToAscii } from "@ilihub/octal-to-ascii";
import { OctalToBinary } from "@ilihub/octal-to-binary";
import { OctalToDecimal } from "@ilihub/octal-to-decimal";
import { OctalToHexadecimal } from "@ilihub/octal-to-hexadecimal";

/**
 * Represents an Octal number and provides methods to convert it to other number systems.
 */
export class Octal {
  /**
   * Creates an instance of Octal.
   *
   * @param octalText - The octal number as a string.
   *
   * @example
   * ```typescript
   * const octal = new Octal('52');
   * ```
   */
  constructor(private readonly octalText: string) {}

  /**
   * Converts the octal number to its ASCII representation.
   *
   * @returns The ASCII representation of the octal number.
   *
   * @example
   * ```typescript
   * const octal = new Octal('52');
   * const ascii = octal.toAscii(); // returns 'R'
   * ```
   */
  public toAscii(): string {
    return OctalToAscii(this.octalText);
  }

  /**
   * Converts the octal number to its binary representation.
   *
   * @returns The binary representation of the octal number.
   *
   * @example
   * ```typescript
   * const octal = new Octal('52');
   * const binary = octal.toBinary(); // returns '101010'
   * ```
   */
  public toBinary(): string {
    return OctalToBinary(this.octalText);
  }

  /**
   * Converts the octal number to its decimal representation.
   *
   * @returns The decimal representation of the octal number.
   *
   * @example
   * ```typescript
   * const octal = new Octal('52');
   * const decimal = octal.toDecimal(); // returns 42
   * ```
   */
  public toDecimal(): number {
    return OctalToDecimal(this.octalText);
  }

  /**
   * Converts the octal number to its hexadecimal representation.
   *
   * @returns The hexadecimal representation of the octal number.
   *
   * @example
   * ```typescript
   * const octal = new Octal('52');
   * const hexadecimal = octal.toHexadecimal(); // returns '2A'
   * ```
   */
  public toHexadecimal(): string {
    return OctalToHexadecimal(this.octalText);
  }
}
