# @ilihub/octal

Octal number system conversion typescript functions

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Foctal?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Foctal)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/octal)](https://socket.dev/npm/package/@ilihub/octal)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/octal

# or, if you're using npm
npm install @ilihub/octal

# or, if you're using yarn
yarn add @ilihub/octal
```

## Usage

```javascript
import { Octal } from "@ilihub/octal";

const octal = new Octal("101");

const ascii = octal.toAscii();
console.log(ascii); // A

const binary = octal.toBinary();
console.log(binary); // 001000001

const decimal = octal.toDecimal();
console.log(decimal); // 65

const hexadecimal = octal.toHexadecimal();
console.log(hexadecimal); // 41
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
