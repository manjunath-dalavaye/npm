# @ilihub/hexadecimal-to-ascii

Hexadecimal to ASCII converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fhexadecimal-to-ascii?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fhexadecimal-to-ascii)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/hexadecimal-to-ascii

# or, if you're using npm
npm install @ilihub/hexadecimal-to-ascii

# or, if you're using yarn
yarn add @ilihub/hexadecimal-to-ascii
```

## Usage

```javascript
import { HexadecimalToAscii } from "@ilihub/hexadecimal-to-ascii";

const hexadecimal = "48656C6C6F20576F726C64";

const ascii = HexadecimalToAscii(hexadecimal);
console.log(ascii);

// Output
// Hello World
```

---