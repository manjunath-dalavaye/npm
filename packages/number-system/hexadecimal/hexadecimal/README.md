# @ilihub/hexadecimal

Hexadecimal number system conversion typescript functions

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fhexadecimal?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fhexadecimal)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/hexadecimal)](https://socket.dev/npm/package/@ilihub/hexadecimal)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/hexadecimal

# or, if you're using npm
npm install @ilihub/hexadecimal

# or, if you're using yarn
yarn add @ilihub/hexadecimal
```

## Usage

```javascript
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
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
