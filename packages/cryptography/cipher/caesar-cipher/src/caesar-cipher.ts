/**
 * The CaesarCipher class provides methods for encrypting and decrypting text using the Caesar cipher.
 */
export class CaesarCipher {
  /**
   * Encrypts the given plaintext using the Caesar cipher with the given shift.
   *
   * @param plaintext - The plaintext to encrypt.
   * @param shift - The number of positions to shift each letter by.
   * @returns The encrypted ciphertext.
   *
   * @example
   * ```typescript
   * const cipher = new CaesarCipher();
   * const plaintext = "HELLO WORLD";
   * const shift = 3;
   * const ciphertext = cipher.encrypt(plaintext, shift); // "KHOOR ZRUOG"
   * ```
   */
  public encrypt(plaintext: string, shift: number): string {
    let ciphertext = "";

    for (let i = 0; i < plaintext.length; i++) {
      const charCode = plaintext.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        ciphertext += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        ciphertext += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        // Non-alphabetic characters
        ciphertext += plaintext.charAt(i);
      }
    }

    return ciphertext;
  }

  /**
   * Decrypts the given ciphertext using the Caesar cipher with the given shift.
   *
   * @param ciphertext - The ciphertext to decrypt.
   * @param shift - The number of positions to shift each letter by.
   * @returns The decrypted plaintext.
   *
   * @example
   * ```typescript
   * const cipher = new CaesarCipher();
   * const ciphertext = "KHOOR ZRUOG";
   * const shift = 3;
   * const plaintext = cipher.decrypt(ciphertext, shift); // "HELLO WORLD"
   * ```
   */
  public decrypt(ciphertext: string, shift: number): string {
    let plaintext = "";

    for (let i = 0; i < ciphertext.length; i++) {
      const charCode = ciphertext.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        plaintext += String.fromCharCode(
          ((charCode - 65 - shift + 26) % 26) + 65,
        );
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        plaintext += String.fromCharCode(
          ((charCode - 97 - shift + 26) % 26) + 97,
        );
      } else {
        // Non-alphabetic characters
        plaintext += ciphertext.charAt(i);
      }
    }

    return plaintext;
  }

  /**
   * Decrypts the given ciphertext using the Caesar cipher for all possible shift values.
   *
   * @param ciphertext - The ciphertext to decrypt.
   * @returns An array of all possible decrypted plaintexts.
   *
   * @example
   * ```typescript
   * const cipher = new CaesarCipher();
   * const ciphertext = "KHOOR ZRUOG";
   * const plaintexts = cipher.decryptAll(ciphertext); // ["HELLO WORLD", "GDKKN VNQMF", ...]
   * ```
   */
  public decryptAll(ciphertext: string): string[] {
    const plaintexts: string[] = [];

    for (let shift = 0; shift < 26; shift++) {
      plaintexts.push(this.decrypt(ciphertext, shift));
    }

    return plaintexts;
  }
}
