# @ilihub/cube

A collection of useful TypeScript functions for cube related operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcube?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcube)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/cube)](https://socket.dev/npm/package/@ilihub/cube)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/cube

# or, if you're using npm
npm install @ilihub/cube

# or, if you're using yarn
yarn add @ilihub/cube
```

## Usage

```javascript
import { Cube } from "@ilihub/cube";

const sideLength = 5;

const cube = new Cube(sideLength);

const diagonal = cube.diagonal();
console.log(diagonal); // 8.660254037844386

const lateralSurfaceArea = cube.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 100

const totalSurfaceArea = cube.totalSurfaceArea();
console.log(totalSurfaceArea); // 150

const volume = cube.volume();
console.log(volume); // 125
```

## Available Functions and Classes

- [Cube](https://www.npmjs.com/package/@ilihub/cube)
- [Diagonal Of Cube](https://www.npmjs.com/package/@ilihub/diagonal-of-cube)
- [Lateral Surface Area Of Cube](https://www.npmjs.com/package/@ilihub/lateral-surface-area-of-cube)
- [Total Surface Area Of Cube](https://www.npmjs.com/package/@ilihub/total-surface-area-of-cube)
- [Volume Of Cube](https://www.npmjs.com/package/@ilihub/volume-of-cube)

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
