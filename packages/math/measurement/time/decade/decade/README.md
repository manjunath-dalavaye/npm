# @ilihub/decade

TypeScript functions for converting decade to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fdecade?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fdecade)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/decade)](https://socket.dev/npm/package/@ilihub/decade)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/decade

# or, if you're using npm
npm install @ilihub/decade

# or, if you're using yarn
yarn add @ilihub/decade
```

## Usage

```javascript
import { Decade } from "@ilihub/decade";

const decade = new Decade(1);

const milliseconds = decade.toMillisecond();
console.log(milliseconds); // 315360000000

const seconds = decade.toSecond();
console.log(seconds); // 315360000

const minutes = decade.toMinute();
console.log(minutes); // 5256000

const hours = decade.toHour();
console.log(hours); // 87600

const days = decade.toDay();
console.log(days); // 3650

const weeks = decade.toWeek();
console.log(weeks); // 520

const months = decade.toMonth();
console.log(months); // 120

const years = decade.toYear();
console.log(years); // 10

const centuries = decade.toCentury();
console.log(centuries); // 0.1
```

## Available Functions and Classes

- [Decade](https://www.npmjs.com/package/@ilihub/decade)
- [Decade To Millisecond](https://www.npmjs.com/package/@ilihub/decade-to-millisecond)
- [Decade To Second](https://www.npmjs.com/package/@ilihub/decade-to-second)
- [Decade To Minute](https://www.npmjs.com/package/@ilihub/decade-to-minute)
- [Decade To Hour](https://www.npmjs.com/package/@ilihub/decade-to-hour)
- [Decade To Day](https://www.npmjs.com/package/@ilihub/decade-to-day)
- [Decade To Week](https://www.npmjs.com/package/@ilihub/decade-to-week)
- [Decade To Month](https://www.npmjs.com/package/@ilihub/decade-to-month)
- [Decade To Year](https://www.npmjs.com/package/@ilihub/decade-to-year)
- [Decade To Century](https://www.npmjs.com/package/@ilihub/decade-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
