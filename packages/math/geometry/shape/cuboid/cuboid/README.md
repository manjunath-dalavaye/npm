# @ilihub/cuboid

A collection of useful TypeScript functions for cuboid related operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcuboid?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcuboid)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/cuboid)](https://socket.dev/npm/package/@ilihub/cuboid)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/cuboid

# or, if you're using npm
npm install @ilihub/cuboid

# or, if you're using yarn
yarn add @ilihub/cuboid
```

## Usage

```javascript
import { Cuboid } from "@ilihub/cuboid";

const length = 10;
const width = 20;
const height = 30;

const cuboid = new Cuboid(length, width, height);

const lateralSurfaceArea = cuboid.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 1800

const perimeter = cuboid.perimeter();
console.log(perimeter); // 240

const surfaceArea = cuboid.surfaceArea();
console.log(surfaceArea); // 2200

const totalSurfaceArea = cuboid.totalSurfaceArea();
console.log(totalSurfaceArea); // 2200

const volume = cuboid.volume();
console.log(volume); // 6000
```

## Available Functions and Classes

- [Lateral Surface Area Of Cuboid](https://www.npmjs.com/package/@ilihub/lateral-surface-area-of-cuboid)
- [Perimeter Of Cuboid](https://www.npmjs.com/package/@ilihub/perimeter-of-cuboid)
- [Surface Area Of Cuboid](https://www.npmjs.com/package/@ilihub/surface-area-of-cuboid)
- [Total Surface Area Of Cuboid](https://www.npmjs.com/package/@ilihub/total-surface-area-of-cuboid)
- [Volume Of Cuboid](https://www.npmjs.com/package/@ilihub/volume-of-cuboid)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
