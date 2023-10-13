# @ilihub/second

TypeScript functions for converting second to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fsecond?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fsecond)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/second)](https://socket.dev/npm/package/@ilihub/second)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/second

# or, if you're using npm
npm install @ilihub/second

# or, if you're using yarn
yarn add @ilihub/second
```

## Usage

```javascript
import { Second } from "@ilihub/second";

const second = new Second(60);

const milliseconds = second.toMillisecond();
console.log(milliseconds); // 60000

const minutes = second.toMinute();
console.log(minutes); // 1

const hours = second.toHour();
console.log(hours); // 0.016666666666666666

const days = second.toDay();
console.log(days); // 0.0006944444444444445

const weeks = second.toWeek();
console.log(weeks); // 0.0000992063492063492

const months = second.toMonth();
console.log(months); // 0.000023148148148148147

const years = second.toYear();
console.log(years); // 0.000001902587519025875

const decades = second.toDecade();
console.log(decades); // 1.9025875190258752e-7

const centuries = second.toCentury();
console.log(centuries); // 1.9025875190258753e-8
```

## Available Functions and Classes

- [Second](https://www.npmjs.com/package/@ilihub/second)
- [Second To Millisecond](https://www.npmjs.com/package/@ilihub/second-to-millisecond)
- [Second To Minute](https://www.npmjs.com/package/@ilihub/second-to-minute)
- [Second To Hour](https://www.npmjs.com/package/@ilihub/second-to-hour)
- [Second To Day](https://www.npmjs.com/package/@ilihub/second-to-day)
- [Second To Week](https://www.npmjs.com/package/@ilihub/second-to-week)
- [Second To Month](https://www.npmjs.com/package/@ilihub/second-to-month)
- [Second To Year](https://www.npmjs.com/package/@ilihub/second-to-year)
- [Second To Decade](https://www.npmjs.com/package/@ilihub/second-to-decade)
- [Second To Century](https://www.npmjs.com/package/@ilihub/second-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
