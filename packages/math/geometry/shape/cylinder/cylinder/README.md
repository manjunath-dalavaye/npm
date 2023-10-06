# @ilihub/cylinder

A collection of useful TypeScript functions for cylinder related operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcylinder?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcylinder)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/cylinder)](https://socket.dev/npm/package/@ilihub/cylinder)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/cylinder

# or, if you're using npm
npm install @ilihub/cylinder

# or, if you're using yarn
yarn add @ilihub/cylinder
```

## Usage

```javascript
import { Cylinder } from "@ilihub/cylinder";

const radius = 5;
const height = 10;

const cylinder = new Cylinder(radius, height);

const lateralSurfaceArea = cylinder.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 314.1592653589793

const totalSurfaceArea = cylinder.totalSurfaceArea();
console.log(totalSurfaceArea); // 471.23889803846896

const volume = cylinder.volume();
console.log(volume); // 785.3981633974483
```

## Available Functions and Classes

- [Lateral Surface Area Of Cylinder](https://www.npmjs.com/package/@ilihub/lateral-surface-area-of-cylinder)
- [Total Surface Area Of Cylinder](https://www.npmjs.com/package/@ilihub/total-surface-area-of-cylinder)
- [Volume Of Cylinder](https://www.npmjs.com/package/@ilihub/volume-of-cylinder)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
