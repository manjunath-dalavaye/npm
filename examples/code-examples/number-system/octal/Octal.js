import { Octal } from "@ilihub/code";

const octal = new Octal("101");

const ascii = octal.toAscii();
console.log(ascii); // A

const binary = octal.toBinary();
console.log(binary); // 001000001

const decimal = octal.toDecimal();
console.log(decimal); // 65

const hexadecimal = octal.toHexadecimal();
console.log(hexadecimal); // 41
