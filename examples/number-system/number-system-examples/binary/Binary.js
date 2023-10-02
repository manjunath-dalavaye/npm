import { Binary } from "@ilihub/number-system";

const binary = new Binary("1000001");

const ascii = binary.toAscii();
console.log(ascii); // A

const decimal = binary.toDecimal();
console.log(decimal); // 65

const hexadecimal = binary.toHexadecimal();
console.log(hexadecimal); // 41

const octal = binary.toOctal();
console.log(octal); // 101
