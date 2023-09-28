# @ilihub/math

A collection of useful TypeScript functions and utilities for mathematical operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fmath?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fmath)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/math)](https://socket.dev/npm/package/@ilihub/math)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/math

# or, if you're using npm
npm install @ilihub/math

# or, if you're using yarn
yarn add @ilihub/math
```

## Usage

```javascript
import { Triangle } from "@ilihub/math";

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

- [Geometry](https://www.npmjs.com/package/@ilihub/geometry)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
