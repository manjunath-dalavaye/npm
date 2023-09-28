# @ilihub/scalene-triangle

A collection of useful TypeScript functions and utilities for performing calculations on scalene triangle.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fscalene-triangle?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fscalene-triangle)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/scalene-triangle)](https://socket.dev/npm/package/@ilihub/scalene-triangle)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/scalene-triangle

# or, if you're using npm
npm install @ilihub/scalene-triangle

# or, if you're using yarn
yarn add @ilihub/scalene-triangle
```

## Usage

```javascript
import { ScaleneTriangle } from "@ilihub/scalene-triangle";

const s1 = 6;
const s2 = 5;
const s3 = 4;

const scaleneTriangle = new ScaleneTriangle(s1, s2, s3);

const area = scaleneTriangle.area();
console.log(area); // 9.921567416492215

const perimeter = scaleneTriangle.perimeter();
console.log(perimeter); // 15
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
