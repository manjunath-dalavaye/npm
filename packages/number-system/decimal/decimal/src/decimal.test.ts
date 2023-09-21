import { Decimal } from "./decimal";

describe("Decimal", () => {
  describe("toAscii", () => {
    it("should convert a decimal number to an ASCII string", () => {
      const decimal = 72;
      const expectedAscii = "H";
      const ascii = new Decimal(decimal).toAscii();
      expect(ascii).toEqual(expectedAscii);
    });
  });

  describe("toBinary", () => {
    it("should convert a decimal number to a binary string", () => {
      const decimal = 128;
      const expectedBinary = "10000000";
      const binary = new Decimal(decimal).toBinary();
      expect(binary).toEqual(expectedBinary);
    });
  });

  describe("toHexadecimal", () => {
    it("should convert a decimal number to a hexadecimal string", () => {
      const decimal = 4096;
      const expectedHexadecimal = "1000";
      const hexadecimal = new Decimal(decimal).toHexadecimal();
      expect(hexadecimal).toEqual(expectedHexadecimal);
    });
  });

  describe("toOctal", () => {
    it("should convert a decimal number to an octal string", () => {
      const decimal = 511;
      const expectedOctal = "777";
      const octal = new Decimal(decimal).toOctal();
      expect(octal).toEqual(expectedOctal);
    });
  });
});
