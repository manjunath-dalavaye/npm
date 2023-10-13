# @ilihub/week

TypeScript functions for converting day to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fweek?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fweek)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/week)](https://socket.dev/npm/package/@ilihub/week)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/week

# or, if you're using npm
npm install @ilihub/week

# or, if you're using yarn
yarn add @ilihub/week
```

## Usage

```javascript
import { Week } from "@ilihub/week";

const week = new Week(1);

const milliseconds = week.toMillisecond();
console.log(milliseconds); // 604800000

const seconds = week.toSecond();
console.log(seconds); // 604800

const minutes = week.toMinute();
console.log(minutes); // 10080

const hours = week.toHour();
console.log(hours); // 168

const days = week.toDay();
console.log(days); // 7

const months = week.toMonth();
console.log(months); // 0.25

const years = week.toYear();
console.log(years); // 0.019230769230769232

const decades = week.toDecade();
console.log(decades); // 0.0019230769230769232

const centuries = week.toCentury();
console.log(centuries); // 0.00019230769230769232
```

## Available Functions and Classes

- [Week](https://www.npmjs.com/package/@ilihub/week)
- [Week To Millisecond](https://www.npmjs.com/package/@ilihub/week-to-millisecond)
- [Week To Second](https://www.npmjs.com/package/@ilihub/week-to-second)
- [Week To Minute](https://www.npmjs.com/package/@ilihub/week-to-minute)
- [Week To Hour](https://www.npmjs.com/package/@ilihub/week-to-hour)
- [Week To Day](https://www.npmjs.com/package/@ilihub/week-to-day)
- [Week To Month](https://www.npmjs.com/package/@ilihub/week-to-month)
- [Week To Year](https://www.npmjs.com/package/@ilihub/week-to-year)
- [Week To Decade](https://www.npmjs.com/package/@ilihub/week-to-decade)
- [Week To Century](https://www.npmjs.com/package/@ilihub/week-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
