# @ilihub/ascii-to-decimal

ASCII to Decimal converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fascii-to-decimal?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fascii-to-decimal)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/ascii-to-decimal

# or, if you're using npm
npm install @ilihub/ascii-to-decimal

# or, if you're using yarn
yarn add @ilihub/ascii-to-decimal
```

## Usage

```javascript
import { AsciiToDecimal } from "@ilihub/ascii-to-decimal";

const ascii = "Hello World";

const decimal = AsciiToDecimal(ascii);
console.log(decimal);

// Output
// [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

---
