import { Ascii } from "./ascii";

describe("Ascii", () => {
  describe("toBinary", () => {
    it("should convert ASCII text to binary", () => {
      const ascii = new Ascii("Hello, world!");
      const expectedBinary =
        "01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001";
      const binary = ascii.toBinary();
      expect(binary).toEqual(expectedBinary);
    });
  });

  describe("toDecimal", () => {
    it("should convert ASCII text to decimal", () => {
      const ascii = new Ascii("Hello, world!");
      const expectedDecimal = [
        72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33,
      ];
      const decimal = ascii.toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });
  });

  describe("toHexadecimal", () => {
    it("should convert ASCII text to hexadecimal", () => {
      const ascii = new Ascii("Hello, world!");
      const expectedHexadecimal = "48656C6C6F2C20776F726C6421";
      const hexadecimal = ascii.toHexadecimal();
      expect(hexadecimal).toEqual(expectedHexadecimal);
    });
  });

  describe("toOctal", () => {
    it("should convert ASCII text to octal", () => {
      const ascii = new Ascii("Hello, world!");
      const expectedOctal = "110145154154157054040167157162154144041";
      const octal = ascii.toOctal();
      expect(octal).toEqual(expectedOctal);
    });
  });
});
