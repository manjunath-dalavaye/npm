# @ilihub/shape

A collection of useful TypeScript functions and utilities for mathematical operations on geometric shapes.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fshape?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fshape)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/shape)](https://socket.dev/npm/package/@ilihub/shape)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/shape

# or, if you're using npm
npm install @ilihub/shape

# or, if you're using yarn
yarn add @ilihub/shape
```

## Usage

```javascript
import { Triangle } from "@ilihub/shape";

const s1 = 6;
const s2 = 5;
const s3 = 4;

const triangle = new Triangle(s1, s2, s3);

const area = triangle.area();
console.log(area); // 9.921567416492215

const perimeter = triangle.perimeter();
console.log(perimeter); // 15
```

## Available Functions and Classes

- [Circle](https://www.npmjs.com/package/@ilihub/circle)
- [Cube](https://www.npmjs.com/package/@ilihub/cube)
- [Parallelogram](https://www.npmjs.com/package/@ilihub/parallelogram)
- [Rectangle](https://www.npmjs.com/package/@ilihub/rectangle)
- [Rhombus](https://www.npmjs.com/package/@ilihub/rhombus)
- [Semi Circle](https://www.npmjs.com/package/@ilihub/semi-circle)
- [Sphere](https://www.npmjs.com/package/@ilihub/sphere)
- [Square](https://www.npmjs.com/package/@ilihub/square)
- [Triangle](https://www.npmjs.com/package/@ilihub/triangle)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
