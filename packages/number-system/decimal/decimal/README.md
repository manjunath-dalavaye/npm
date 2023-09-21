# @ilihub/decimal

Decimal number system conversion typescript functions

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fdecimal?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fdecimal)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/decimal)](https://socket.dev/npm/package/@ilihub/decimal)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/decimal

# or, if you're using npm
npm install @ilihub/decimal

# or, if you're using yarn
yarn add @ilihub/decimal
```

## Usage

```javascript
import { Decimal } from "@ilihub/decimal";

const decimal = new Decimal(65);

const ascii = decimal.toAscii();
console.log(ascii); // A

const binary = decimal.toBinary();
console.log(binary); // 1000001

const hexadecimal = decimal.toHexadecimal();
console.log(hexadecimal); // 41

const octal = decimal.toOctal();
console.log(octal); // 101
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
