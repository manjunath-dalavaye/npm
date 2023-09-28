# @ilihub/isosceles-triangle

A collection of useful TypeScript functions and utilities for performing calculations on isosceles triangles.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fisosceles-triangle?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fisosceles-triangle)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/isosceles-triangle)](https://socket.dev/npm/package/@ilihub/isosceles-triangle)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/isosceles-triangle

# or, if you're using npm
npm install @ilihub/isosceles-triangle

# or, if you're using yarn
yarn add @ilihub/isosceles-triangle
```

## Usage

```javascript
import { IsoscelesTriangle } from "@ilihub/isosceles-triangle";

const side = 5;
const base = 6;

const isoscelesTriangle = new IsoscelesTriangle(side, base);

const area = isoscelesTriangle.area();
console.log(area); // 12

const perimeter = isoscelesTriangle.perimeter();
console.log(perimeter); // 16
```

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
