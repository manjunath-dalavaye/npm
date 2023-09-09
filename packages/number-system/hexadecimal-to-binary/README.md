# @ilihub/hexadecimal-to-binary

Hexadecimal to Binary converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fhexadecimal-to-binary?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fhexadecimal-to-binary)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/hexadecimal-to-binary

# or, if you're using npm
npm install @ilihub/hexadecimal-to-binary

# or, if you're using yarn
yarn add @ilihub/hexadecimal-to-binary
```

## Usage

```javascript
import { HexadecimalToBinary } from "@ilihub/hexadecimal-to-binary";

const hexadecimal = "80";

const binary = HexadecimalToBinary(hexadecimal);
console.log(binary);

// Output
// 10000000
```

---