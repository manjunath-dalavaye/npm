import { Hexadecimal } from "@ilihub/hexadecimal";

const hexadecimal = new Hexadecimal("41");

const ascii = hexadecimal.toAscii();
console.log(ascii); // A

const binary = hexadecimal.toBinary();
console.log(binary); // 01000001

const decimal = hexadecimal.toDecimal();
console.log(decimal); // 65

const octal = hexadecimal.toOctal();
console.log(octal); // 101
