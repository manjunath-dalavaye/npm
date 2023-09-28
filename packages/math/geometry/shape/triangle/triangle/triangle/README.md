# @ilihub/triangle

A collection of useful TypeScript functions and utilities for performing calculations on triangles.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Ftriangle?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Ftriangle)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/triangle)](https://socket.dev/npm/package/@ilihub/triangle)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/triangle

# or, if you're using npm
npm install @ilihub/triangle

# or, if you're using yarn
yarn add @ilihub/triangle
```

## Usage

```javascript
import { Triangle } from "@ilihub/triangle";

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

- Triangle
  - [Triangle](https://www.npmjs.com/package/@ilihub/triangle)
  - [Area Of Triangle](https://www.npmjs.com/package/@ilihub/area-of-triangle)
  - [Perimeter Of Triangle](https://www.npmjs.com/package/@ilihub/perimeter-of-triangle)
- Right Triangle
  - [Right Triangle](https://www.npmjs.com/package/@ilihub/right-triangle)
  - [Area Of Right Triangle](https://www.npmjs.com/package/@ilihub/area-of-right-triangle)
  - [Perimeter Of Right Triangle](https://www.npmjs.com/package/@ilihub/perimeter-of-right-triangle)
- Equilateral Triangle
  - [Equilateral Triangle](https://www.npmjs.com/package/@ilihub/equilateral-triangle)
  - [Area Of Equilateral Triangle](https://www.npmjs.com/package/@ilihub/area-of-equilateral-triangle)
  - [Perimeter Of Equilateral Triangle](https://www.npmjs.com/package/@ilihub/perimeter-of-equilateral-triangle)
- Isosceles Triangle
  - [Isosceles Triangle](https://www.npmjs.com/package/@ilihub/isosceles-triangle)
  - [Area Of Isosceles Triangle](https://www.npmjs.com/package/@ilihub/area-of-isosceles-triangle)
  - [Perimeter Of Isosceles Triangle](https://www.npmjs.com/package/@ilihub/perimeter-of-isosceles-triangle)
- Scalene Triangle
  - [Scalene Triangle](https://www.npmjs.com/package/@ilihub/scalene-triangle)
  - [Area Of Scalene Triangle](https://www.npmjs.com/package/@ilihub/area-of-scalene-triangle)
  - [Perimeter Of Scalene Triangle](https://www.npmjs.com/package/@ilihub/perimeter-of-scalene-triangle)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
