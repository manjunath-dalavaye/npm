# @ilihub/binary

Binary number system conversion typescript functions

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fbinary?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fbinary)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/binary)](https://socket.dev/npm/package/@ilihub/binary)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/binary

# or, if you're using npm
npm install @ilihub/binary

# or, if you're using yarn
yarn add @ilihub/binary
```

## Usage

```javascript
import { Binary } from "@ilihub/binary";

const binary = new Binary("1000001");

const ascii = binary.toAscii();
console.log(ascii); // A

const decimal = binary.toDecimal();
console.log(decimal); // 65

const hexadecimal = binary.toHexadecimal();
console.log(hexadecimal); // 41

const octal = binary.toOctal();
console.log(octal); // 101
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
