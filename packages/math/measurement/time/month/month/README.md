# @ilihub/month

TypeScript functions for converting month to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fmonth?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fmonth)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/month)](https://socket.dev/npm/package/@ilihub/month)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/month

# or, if you're using npm
npm install @ilihub/month

# or, if you're using yarn
yarn add @ilihub/month
```

## Usage

```javascript
import { Month } from "@ilihub/month";

const month = new Month(1);

const milliseconds = month.toMillisecond();
console.log(milliseconds); // 2629800000

const seconds = month.toSecond();
console.log(seconds); // 2629800

const minutes = month.toMinute();
console.log(minutes); // 43830

const hours = month.toHour();
console.log(hours); // 720

const days = month.toDay();
console.log(days); // 30

const weeks = month.toWeek();
console.log(weeks); // 4

const years = month.toYear();
console.log(years); // 0.08333333333333333

const decades = month.toDecade();
console.log(decades); // 0.008333333333333333

const centuries = month.toCentury();
console.log(centuries); // 0.0008333333333333333
```

## Available Functions and Classes

- [Month](https://www.npmjs.com/package/@ilihub/month)
- [Month To Millisecond](https://www.npmjs.com/package/@ilihub/month-to-millisecond)
- [Month To Second](https://www.npmjs.com/package/@ilihub/month-to-second)
- [Month To Minute](https://www.npmjs.com/package/@ilihub/month-to-minute)
- [Month To Hour](https://www.npmjs.com/package/@ilihub/month-to-hour)
- [Month To Day](https://www.npmjs.com/package/@ilihub/month-to-day)
- [Month To Week](https://www.npmjs.com/package/@ilihub/month-to-week)
- [Month To Year](https://www.npmjs.com/package/@ilihub/month-to-year)
- [Month To Decade](https://www.npmjs.com/package/@ilihub/month-to-decade)
- [Month To Century](https://www.npmjs.com/package/@ilihub/month-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
