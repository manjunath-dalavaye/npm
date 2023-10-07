# @ilihub/millisecond

TypeScript functions for converting millisecond to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fmillisecond?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fmillisecond)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/millisecond)](https://socket.dev/npm/package/@ilihub/millisecond)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/millisecond

# or, if you're using npm
npm install @ilihub/millisecond

# or, if you're using yarn
yarn add @ilihub/millisecond
```

## Usage

```javascript
import { Millisecond as MillisecondClass } from "@ilihub/millisecond";

const millisecond = 3153600000000;

const Millisecond = new MillisecondClass(millisecond);

const century = Millisecond.toCentury();
console.log(century); // 1

const decade = Millisecond.toDecade();
console.log(decade); // 10

const year = Millisecond.toYear();
console.log(year); // 100

const month = Millisecond.toMonth();
console.log(month); // 1216.6666666666667

const week = Millisecond.toWeek();
console.log(week); // 5214.285714285715

const day = Millisecond.toDay();
console.log(day); // 36500

const hour = Millisecond.toHour();
console.log(hour); // 876000

const minute = Millisecond.toMinute();
console.log(minute); // 52560000

const second = Millisecond.toSecond();
console.log(second); // 3153600000
```

## Available Functions and Classes

- [Millisecond](https://www.npmjs.com/package/@ilihub/millisecond)
- [Millisecond To Second](https://www.npmjs.com/package/@ilihub/millisecond-to-second)
- [Millisecond To Minute](https://www.npmjs.com/package/@ilihub/millisecond-to-minute)
- [Millisecond To Hour](https://www.npmjs.com/package/@ilihub/millisecond-to-hour)
- [Millisecond To Day](https://www.npmjs.com/package/@ilihub/millisecond-to-day)
- [Millisecond To Week](https://www.npmjs.com/package/@ilihub/millisecond-to-week)
- [Millisecond To Month](https://www.npmjs.com/package/@ilihub/millisecond-to-month)
- [Millisecond To Year](https://www.npmjs.com/package/@ilihub/millisecond-to-year)
- [Millisecond To Decade](https://www.npmjs.com/package/@ilihub/millisecond-to-decade)
- [Millisecond To Century](https://www.npmjs.com/package/@ilihub/millisecond-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
