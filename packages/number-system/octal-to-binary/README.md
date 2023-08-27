# @ilihub/octal-to-binary

Octal to Binary converter TypeScript library.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Foctal-to-binary?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Foctal-to-binary)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/octal-to-binary

# or, if you're using npm
npm install @ilihub/octal-to-binary

# or, if you're using yarn
yarn add @ilihub/octal-to-binary
```

## Usage

```javascript
import { OctalToBinary } from "@ilihub/octal-to-binary";

const octal = "200";

const binary = OctalToBinary(octal);
console.log(binary);

// Output
// 10000000
```

---
