# @ilihub/ascii-to-octal

ASCII to Octal converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fascii-to-octal?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fascii-to-octal)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/ascii-to-octal

# or, if you're using npm
npm install @ilihub/ascii-to-octal

# or, if you're using yarn
yarn add @ilihub/ascii-to-octal
```

## Usage

```javascript
import { AsciiToOctal } from "@ilihub/ascii-to-octal";

const ascii = "Hello World";

const octal = AsciiToOctal(ascii);
console.log(octal);

// Output
// 110145154154157040127157162154144
```

---
