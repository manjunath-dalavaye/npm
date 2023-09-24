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

## Sponsors & Backers

[![Diamond Sponsor][diamond_sponsor_img]][open_collective_url] [![Gold Sponsor][gold_sponsor_img]][open_collective_url] [![Backer][backer_img]][open_collective_url] [![Supporter][supporter_img]][open_collective_url]

Support the development of new open-source projects from ilihub through crowdfunding.

The core of ilihub is our crowd-funded open-source projects, licensed under the permissive MIT license. Sponsorship increases the rate of bug fixes, documentation improvements, and feature development.

### 🦄 Diamond Sponsor 🦄

[![Diamond Sponsor][diamond_sponsor_logo_img]][open_collective_url]

### 💝 Gold Sponsor 💝

[![Gold Sponsor][gold_sponsor_logo_img]][open_collective_url]

### 🎁 Backer 🎁

[![Backer][backer_logo_img]][open_collective_url]

### 🤝 Supporter 🤝

[![Supporter][supporter_logo_img]][open_collective_url]

<!-- Reference Links -->

[open_collective_url]: https://opencollective.com/ilihub
[open_collective_img]: https://opencollective.com/ilihub/tiers/badge.svg
[diamond_sponsor_img]: https://opencollective.com/ilihub/tiers/diamond-sponsor/badge.svg?label=%F0%9F%A6%84%20Diamond%20Sponsor%20%F0%9F%A6%84&color=brightgreen
[diamond_sponsor_logo_img]: https://opencollective.com/ilihub/tiers/diamond-sponsor.svg?avatarHeight=96&width=600
[gold_sponsor_img]: https://opencollective.com/ilihub/tiers/sponsor/badge.svg?label=%F0%9F%92%9D%20Gold%20Sponsor%20%F0%9F%92%9D&color=brightgreen
[gold_sponsor_logo_img]: https://opencollective.com/ilihub/tiers/sponsor.svg?avatarHeight=70&width=600
[backer_img]: https://opencollective.com/ilihub/tiers/backer/badge.svg?label=%F0%9F%8E%81%20Backer%20%F0%9F%8E%81&color=brightgreen
[backer_logo_img]: https://opencollective.com/ilihub/tiers/backer.svg?avatarHeight=60&width=600
[supporter_img]: https://opencollective.com/ilihub/tiers/supporter/badge.svg?label=%F0%9F%A4%9D%20Supporter%20%F0%9F%A4%9D&color=brightgreen
[supporter_logo_img]: https://opencollective.com/ilihub/tiers/supporter.svg?avatarHeight=50&width=600

<!-- Reference Links End -->

<!-- sponsors_and_backers_section_end -->

---
