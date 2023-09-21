# @ilihub/ascii

ASCII number system conversion typescript functions

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fascii?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fascii)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/ascii)](https://socket.dev/npm/package/@ilihub/ascii)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/ascii

# or, if you're using npm
npm install @ilihub/ascii

# or, if you're using yarn
yarn add @ilihub/ascii
```

## Usage

```javascript
import { Ascii } from "@ilihub/ascii";

const ascii = new Ascii("Hello World");

const binary = ascii.toBinary();
console.log(binary); // 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001

const decimal = ascii.toDecimal();
console.log(decimal); // [ 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33 ]

const hexadecimal = ascii.toHexadecimal();
console.log(hexadecimal); // 48656C6C6F2C20776F726C6421

const octal = ascii.toOctal();
console.log(octal); // 110145154154157054040167157162154144041
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
