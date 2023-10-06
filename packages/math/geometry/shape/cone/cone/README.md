# @ilihub/cone

A collection of useful TypeScript functions for cone related operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcone?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcone)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/cone)](https://socket.dev/npm/package/@ilihub/cone)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/cone

# or, if you're using npm
npm install @ilihub/cone

# or, if you're using yarn
yarn add @ilihub/cone
```

## Usage

```javascript
import { Cone } from "@ilihub/cone";

const radius = 5;
const slantHeight = 13;
const height = 13;

const cone = new Cone(radius, slantHeight, height);

const curvedSurfaceArea = cone.curvedSurfaceArea();
console.log(curvedSurfaceArea); // 204.20352248333654

const totalSurfaceArea = cone.totalSurfaceArea();
console.log(totalSurfaceArea); // 282.7433388230814

const volume = cone.volume();
console.log(volume); // 340.3392041388942
```

## Available Functions and Classes

- [Curved Surface Area of Cone](https://www.npmjs.com/package/@ilihub/curved-surface-area-of-cone)
- [Total Surface Area of Cone](https://www.npmjs.com/package/@ilihub/total-surface-area-of-cone)
- [Volume of Cone](https://www.npmjs.com/package/@ilihub/volume-of-cone)

---

<!-- sponsors_and_backers_section_start -->
<!-- sponsors_and_backers_section_end -->

---
