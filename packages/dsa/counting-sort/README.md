# @ilihub/counting-sort

Counting sort algorithm implementation in TypeScript.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcounting-sort?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcounting-sort)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/counting-sort

# or, if you're using npm
npm install @ilihub/counting-sort

# or, if you're using yarn
yarn add @ilihub/counting-sort
```

## Usage

```javascript
import { CountingSort } from "@ilihub/counting-sort";

const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];

const sortedArr = CountingSort(arr);

console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---