# @ilihub/sphere

A collection of useful TypeScript functions for sphere related operations.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fsphere?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fsphere)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/sphere)](https://socket.dev/npm/package/@ilihub/sphere)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/sphere

# or, if you're using npm
npm install @ilihub/sphere

# or, if you're using yarn
yarn add @ilihub/sphere
```

## Usage

```javascript
import { Sphere } from "@ilihub/sphere";

const radius = 5;

const sphere = new Sphere(radius);

const circumference = sphere.circumference();
console.log(circumference); // 31.41592653589793

const surfaceArea = sphere.surfaceArea();
console.log(surfaceArea); // 314.1592653589793

const volume = sphere.volume();
console.log(volume); // 523.5987755982989
```

## Available Functions and Classes

- [Sphere](https://www.npmjs.com/package/@ilihub/sphere)
- [Circumference Of Sphere](https://www.npmjs.com/package/@ilihub/circumference-of-sphere)
- [Surface Area Of Sphere](https://www.npmjs.com/package/@ilihub/surface-area-of-sphere)
- [Volume Of Sphere](https://www.npmjs.com/package/@ilihub/volume-of-sphere)

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
