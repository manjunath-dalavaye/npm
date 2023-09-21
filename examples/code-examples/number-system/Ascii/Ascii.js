import { Ascii } from "@ilihub/code";

const ascii = new Ascii("Hello World");

const binary = ascii.toBinary();
console.log(binary); // 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001

const decimal = ascii.toDecimal();
console.log(decimal); // [ 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33 ]

const hexadecimal = ascii.toHexadecimal();
console.log(hexadecimal); // 48656C6C6F2C20776F726C6421

const octal = ascii.toOctal();
console.log(octal); // 110145154154157054040167157162154144041
