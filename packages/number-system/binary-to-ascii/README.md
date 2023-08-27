# @ilihub/binary-to-ascii

Binary to ASCII converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fbinary-to-ascii?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fbinary-to-ascii)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/binary-to-ascii

# or, if you're using npm
npm install @ilihub/binary-to-ascii

# or, if you're using yarn
yarn add @ilihub/binary-to-ascii
```

## Usage

```javascript
import { BinaryToAscii } from "@ilihub/binary-to-ascii";

const binary =
  "0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100";

const ascii = BinaryToAscii(binary);
console.log(ascii);

// Output
// Hello World
```

---
