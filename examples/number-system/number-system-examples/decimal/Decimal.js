import { Decimal } from "@ilihub/number-system";

const decimal = new Decimal(65);

const ascii = decimal.toAscii();
console.log(ascii); // A

const binary = decimal.toBinary();
console.log(binary); // 1000001

const hexadecimal = decimal.toHexadecimal();
console.log(hexadecimal); // 41

const octal = decimal.toOctal();
console.log(octal); // 101
