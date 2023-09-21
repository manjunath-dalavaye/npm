import { Hexadecimal } from "./hexadecimal";

describe("Hexadecimal", () => {
  describe("toAscii", () => {
    it("should convert a hexadecimal string to an ASCII string", () => {
      const hexadecimal = "48656C6C6F2C20776F726C6421";
      const expectedAscii = "Hello, world!";
      const ascii = new Hexadecimal(hexadecimal).toAscii();
      expect(ascii).toEqual(expectedAscii);
    });
  });

  describe("toBinary", () => {
    it("should convert a hexadecimal string to a binary string", () => {
      const hexadecimal = "FF";
      const expectedBinary = "11111111";
      const binary = new Hexadecimal(hexadecimal).toBinary();
      expect(binary).toEqual(expectedBinary);
    });
    it("should convert a hexadecimal string to a binary string", () => {
      const hexadecimal = "2E";
      const expectedBinary = "00101110";
      const binary = new Hexadecimal(hexadecimal).toBinary();
      expect(binary).toEqual(expectedBinary);
    });
  });

  describe("toDecimal", () => {
    it("should convert a hexadecimal string to a decimal number", () => {
      const hexadecimal = "FF";
      const expectedDecimal = 255;
      const decimal = new Hexadecimal(hexadecimal).toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });
    it("should convert a hexadecimal string to a decimal number", () => {
      const hexadecimal = "2E";
      const expectedDecimal = 46;
      const decimal = new Hexadecimal(hexadecimal).toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });
  });

  describe("toOctal", () => {
    it("should convert a hexadecimal string to an octal string", () => {
      const hexadecimal = "FF";
      const expectedOctal = "377";
      const octal = new Hexadecimal(hexadecimal).toOctal();
      expect(octal).toEqual(expectedOctal);
    });
    it("should convert a hexadecimal string to an octal string", () => {
      const hexadecimal = "2E";
      const expectedOctal = "56";
      const octal = new Hexadecimal(hexadecimal).toOctal();
      expect(octal).toEqual(expectedOctal);
    });
  });
});
