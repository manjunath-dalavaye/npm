import { Binary } from "./binary";

describe("Binary", () => {
  describe("toAscii", () => {
    it("should convert a binary string to an ASCII string", () => {
      const binary =
        "01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001";
      const expectedAscii = "Hello, world!";
      const ascii = new Binary(binary).toAscii();
      expect(ascii).toEqual(expectedAscii);
    });
  });

  describe("toDecimal", () => {
    it("should convert a binary string to a decimal numbers", () => {
      const binary = "10";
      const expectedDecimal = 2;
      const decimal = new Binary(binary).toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });

    it("should convert a binary string to a decimal numbers", () => {
      const binary = "10000000";
      const expectedDecimal = 128;
      const decimal = new Binary(binary).toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });
  });

  describe("toHexadecimal", () => {
    it("should convert a binary string to a hexadecimal string", () => {
      const binary = "1111";
      const expectedHexadecimal = "F";
      const hexadecimal = new Binary(binary).toHexadecimal();
      expect(hexadecimal).toEqual(expectedHexadecimal);
    });

    it("should convert a binary string to a hexadecimal string", () => {
      const binary = "10000000";
      const expectedHexadecimal = "80";
      const hexadecimal = new Binary(binary).toHexadecimal();
      expect(hexadecimal).toEqual(expectedHexadecimal);
    });
  });

  describe("toOctal", () => {
    it("should convert a binary string to an octal string", () => {
      const binary = "1111";
      const expectedOctal = "17";
      const octal = new Binary(binary).toOctal();
      expect(octal).toEqual(expectedOctal);
    });

    it("should convert a binary string to an octal string", () => {
      const binary = "10000000";
      const expectedOctal = "200";
      const octal = new Binary(binary).toOctal();
      expect(octal).toEqual(expectedOctal);
    });
  });
});
