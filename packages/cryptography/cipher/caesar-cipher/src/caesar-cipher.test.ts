import { CaesarCipher } from "./caesar-cipher";

describe("CaesarCipher", () => {
  describe("encrypt", () => {
    it("should encrypt a plaintext string with a given shift value", () => {
      const cipher = new CaesarCipher();
      const plaintext = "HELLO WORLD";
      const shift = 3;
      const expectedCiphertext = "KHOOR ZRUOG";
      const ciphertext = cipher.encrypt(plaintext, shift);
      expect(ciphertext).toEqual(expectedCiphertext);
    });
  });

  describe("decrypt", () => {
    it("should decrypt a ciphertext string with a given shift value", () => {
      const cipher = new CaesarCipher();
      const ciphertext = "KHOOR ZRUOG";
      const shift = 3;
      const expectedPlaintext = "HELLO WORLD";
      const plaintext = cipher.decrypt(ciphertext, shift);
      expect(plaintext).toEqual(expectedPlaintext);
    });
  });

  describe("decryptAll", () => {
    it("should decrypt a ciphertext string for all possible shift values", () => {
      const cipher = new CaesarCipher();
      const ciphertext = "KHOOR ZRUOG";
      const expectedPlaintexts = [
        "HELLO WORLD",
        "GDKKN VNQKC",
        "FCJJM UMPJB",
        "EBIIL TLOIA",
        "DAHHK SKNHZ",
        "CZGGJ RJMGY",
        "BYFFI QILFX",
        "AXEEH PHKEW",
        "ZWDDG OGJDV",
        "YVCCF NFICU",
        "XUBBE MEHBT",
        "WTAAD LDGAS",
        "VSZZC KCFZR",
        "URYYB JBEYQ",
        "TQXXA IADXP",
        "SPWWZ HZCWO",
        "ROVVY GYBVN",
        "QNUUX FXAUM",
        "PMTTW EWZTL",
        "OLSSV DVYSK",
        "NKRRU CUXRJ",
        "MJQQT BTWQI",
        "LIPPS ASVPH",
        "KHOOR ZRUOG",
        "JGNNQ YQTNF",
        "IFMMP XPSME",
      ];
      const plaintexts = cipher.decryptAll(ciphertext).sort();
      const expectedSorted = expectedPlaintexts.sort();
      expect(plaintexts).toEqual(expectedSorted);
    });
  });
});
