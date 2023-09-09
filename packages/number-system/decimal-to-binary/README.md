# @ilihub/decimal-to-binary

Decimal to binary converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fdecimal-to-binary?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fdecimal-to-binary)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/decimal-to-binary

# or, if you're using npm
npm install @ilihub/decimal-to-binary

# or, if you're using yarn
yarn add @ilihub/decimal-to-binary
```

## Usage

```javascript
import { DecimalToBinary } from "@ilihub/decimal-to-binary";

const decimal = 128;

const binary = DecimalToBinary(decimal);
console.log(binary);

// Output
// 10000000
```

---