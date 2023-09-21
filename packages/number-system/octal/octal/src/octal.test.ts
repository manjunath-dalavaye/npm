import { Octal } from "./octal";

describe("Octal", () => {
  describe("toAscii", () => {
    it("should convert an octal string to an ASCII string", () => {
      const octal = "110145154154157054040167157162154144041";
      const expectedAscii = "Hello, world!";
      const ascii = new Octal(octal).toAscii();
      expect(ascii).toEqual(expectedAscii);
    });
  });

  describe("toBinary", () => {
    it("should convert an octal string to a binary string", () => {
      const octal = "777";
      const expectedBinary = "111111111";
      const binary = new Octal(octal).toBinary();
      expect(binary).toEqual(expectedBinary);
    });
    it("should convert an octal string to a binary string", () => {
      const octal = "56";
      const expectedBinary = "101110";
      const binary = new Octal(octal).toBinary();
      expect(binary).toEqual(expectedBinary);
    });
  });

  describe("toDecimal", () => {
    it("should convert an octal string to a decimal number", () => {
      const octal = "777";
      const expectedDecimal = 511;
      const decimal = new Octal(octal).toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });
    it("should convert an octal string to a decimal number", () => {
      const octal = "56";
      const expectedDecimal = 46;
      const decimal = new Octal(octal).toDecimal();
      expect(decimal).toEqual(expectedDecimal);
    });
  });

  describe("toHexadecimal", () => {
    it("should convert an octal string to a hexadecimal string", () => {
      const octal = "12";
      const expectedHexadecimal = "A";
      const hexadecimal = new Octal(octal).toHexadecimal();
      expect(hexadecimal).toEqual(expectedHexadecimal);
    });
    it("should convert an octal string to a hexadecimal string", () => {
      const octal = "777";
      const expectedHexadecimal = "1FF";
      const hexadecimal = new Octal(octal).toHexadecimal();
      expect(hexadecimal).toEqual(expectedHexadecimal);
    });
  });
});
