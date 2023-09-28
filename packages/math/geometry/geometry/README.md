# @ilihub/geometry

A collection of useful TypeScript functions and utilities for geometric operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fgeometry?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fgeometry)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/geometry)](https://socket.dev/npm/package/@ilihub/geometry)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/geometry

# or, if you're using npm
npm install @ilihub/geometry

# or, if you're using yarn
yarn add @ilihub/geometry
```

## Usage

```javascript
import { Triangle } from "@ilihub/geometry";

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

- [Shape](https://www.npmjs.com/package/@ilihub/shape)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
