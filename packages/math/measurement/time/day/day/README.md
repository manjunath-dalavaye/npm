# @ilihub/day

TypeScript functions for converting day to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fday?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fday)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/day)](https://socket.dev/npm/package/@ilihub/day)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/day

# or, if you're using npm
npm install @ilihub/day

# or, if you're using yarn
yarn add @ilihub/day
```

## Usage

```javascript
import { Day } from "@ilihub/day";

const day = new Day(1);

const milliseconds = day.toMillisecond();
console.log(milliseconds); // 86400000

const seconds = day.toSecond();
console.log(seconds); // 86400

const minutes = day.toMinute();
console.log(minutes); // 1440

const hours = day.toHour();
console.log(hours); // 24

const weeks = day.toWeek();
console.log(weeks); // 0.14285714285714285

const months = day.toMonth();
console.log(months); // 0.03333333333333333

const years = day.toYear();
console.log(years); // 0.0027397260273972603

const decades = day.toDecade();
console.log(decades); // 0.000273972602739726

const centuries = day.toCentury();
console.log(centuries); // 0.000027397260273972603
```

## Available Functions and Classes

- [Day](https://www.npmjs.com/package/@ilihub/day)
- [Day To Millisecond](https://www.npmjs.com/package/@ilihub/day-to-millisecond)
- [Day To Second](https://www.npmjs.com/package/@ilihub/day-to-second)
- [Day To Minute](https://www.npmjs.com/package/@ilihub/day-to-minute)
- [Day To Hour](https://www.npmjs.com/package/@ilihub/day-to-hour)
- [Day To Week](https://www.npmjs.com/package/@ilihub/day-to-week)
- [Day To Month](https://www.npmjs.com/package/@ilihub/day-to-month)
- [Day To Year](https://www.npmjs.com/package/@ilihub/day-to-year)
- [Day To Decade](https://www.npmjs.com/package/@ilihub/day-to-decade)
- [Day To Century](https://www.npmjs.com/package/@ilihub/day-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
