# @ilihub/minute

TypeScript functions for converting minute to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fminute?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fminute)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/minute)](https://socket.dev/npm/package/@ilihub/minute)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/minute

# or, if you're using npm
npm install @ilihub/minute

# or, if you're using yarn
yarn add @ilihub/minute
```

## Usage

```javascript
import { Minute } from "@ilihub/minute";

const minute = new Minute(1);

const milliseconds = minute.toMillisecond();
console.log(milliseconds); // 60000

const seconds = minute.toSecond();
console.log(seconds); // 60

const hours = minute.toHour();
console.log(hours); // 0.016666666666666666

const days = minute.toDay();
console.log(days); // 0.0006944444444444445

const weeks = minute.toWeek();
console.log(weeks); // 0.0000992063492063492

const months = minute.toMonth();
console.log(months); // 0.000023148148148148147

const years = minute.toYear();
console.log(years); // 0.000001902587519025875

const decades = minute.toDecade();
console.log(decades); // 1.9025875190258752e-7

const centuries = minute.toCentury();
console.log(centuries); // 1.902587519025875e-8
```

## Available Functions and Classes

- [Minute](https://www.npmjs.com/package/@ilihub/minute)
- [Minute To Millisecond](https://www.npmjs.com/package/@ilihub/minute-to-millisecond)
- [Minute To Second](https://www.npmjs.com/package/@ilihub/minute-to-second)
- [Minute To Hour](https://www.npmjs.com/package/@ilihub/minute-to-hour)
- [Minute To Day](https://www.npmjs.com/package/@ilihub/minute-to-day)
- [Minute To Week](https://www.npmjs.com/package/@ilihub/minute-to-week)
- [Minute To Month](https://www.npmjs.com/package/@ilihub/minute-to-month)
- [Minute To Year](https://www.npmjs.com/package/@ilihub/minute-to-year)
- [Minute To Decade](https://www.npmjs.com/package/@ilihub/minute-to-decade)
- [Minute To Century](https://www.npmjs.com/package/@ilihub/minute-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
