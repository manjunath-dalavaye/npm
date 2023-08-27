# @ilihub/ascii-to-binary

ASCII to Binary converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fascii-to-binary?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fascii-to-binary)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/ascii-to-binary

# or, if you're using npm
npm install @ilihub/ascii-to-binary

# or, if you're using yarn
yarn add @ilihub/ascii-to-binary
```

## Usage

```javascript
import { AsciiToBinary } from "@ilihub/ascii-to-binary";

const ascii = "Hello World";

const binary = AsciiToBinary(ascii);
console.log(binary);

// Output
// 0100 1000 0110 0101 0110 1100 0110 1100 0110 1111 0010
// 0000 0101 0111 0110 1111 0111 0010 0110 1100 0110 0100
```

---
