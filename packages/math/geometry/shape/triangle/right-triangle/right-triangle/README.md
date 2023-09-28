# @ilihub/right-triangle

A collection of useful TypeScript functions and utilities for performing calculations on right triangle.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fright-triangle?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fright-triangle)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/right-triangle)](https://socket.dev/npm/package/@ilihub/right-triangle)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/right-triangle

# or, if you're using npm
npm install @ilihub/right-triangle

# or, if you're using yarn
yarn add @ilihub/right-triangle
```

## Usage

```javascript
import { RightTriangle } from "@ilihub/right-triangle";

const base = 6;
const height = 5;

const rightTriangle = new RightTriangle(base, height);

const area = rightTriangle.area();
console.log(area); // 15

const perimeter = rightTriangle.perimeter();
console.log(perimeter); // 18.810249675906654
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
