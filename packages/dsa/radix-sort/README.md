# @ilihub/radix-sort

Radix sort algorithm implementation in TypeScript.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fradix-sort?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fradix-sort)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/radix-sort

# or, if you're using npm
npm install @ilihub/radix-sort

# or, if you're using yarn
yarn add @ilihub/radix-sort
```

## Usage

```javascript
import { RadixSort } from "@ilihub/radix-sort";

const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];

const sortedArr = RadixSort(arr);

console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---
