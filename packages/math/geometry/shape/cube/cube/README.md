# @ilihub/cube

A collection of useful TypeScript functions for cube related operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcube?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcube)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/cube)](https://socket.dev/npm/package/@ilihub/cube)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/cube

# or, if you're using npm
npm install @ilihub/cube

# or, if you're using yarn
yarn add @ilihub/cube
```

## Usage

```javascript
import { Cube } from "@ilihub/cube";

const sideLength = 5;

const cube = new Cube(sideLength);

const diagonal = cube.diagonal();
console.log(diagonal); // 8.660254037844386

const lateralSurfaceArea = cube.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 100

const totalSurfaceArea = cube.totalSurfaceArea();
console.log(totalSurfaceArea); // 150

const volume = cube.volume();
console.log(volume); // 125
```

## Available Functions and Classes

- [Cube](https://www.npmjs.com/package/@ilihub/cube)
- [Diagonal Of Cube](https://www.npmjs.com/package/@ilihub/diagonal-of-cube)
- [Lateral Surface Area Of Cube](https://www.npmjs.com/package/@ilihub/lateral-surface-area-of-cube)
- [Total Surface Area Of Cube](https://www.npmjs.com/package/@ilihub/total-surface-area-of-cube)
- [Volume Of Cube](https://www.npmjs.com/package/@ilihub/volume-of-cube)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
