# @ilihub/year

TypeScript functions for converting year to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fyear?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fyear)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/year)](https://socket.dev/npm/package/@ilihub/year)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/year

# or, if you're using npm
npm install @ilihub/year

# or, if you're using yarn
yarn add @ilihub/year
```

## Usage

```javascript
import { Year } from "@ilihub/year";

const year = new Year(1);

const millisecond = year.toMillisecond();
console.log(millisecond); // 31536000000

const second = year.toSecond();
console.log(second); // 31536000

const minute = year.toMinute();
console.log(minute); // 525600

const hour = year.toHour();
console.log(hour); // 8760

const day = year.toDay();
console.log(day); // 365

const week = year.toWeek();
console.log(week); // 52

const month = year.toMonth();
console.log(month); // 12

const decade = year.toDecade();
console.log(decade); // 0.1

const century = year.toCentury();
console.log(century); // 0.01
```

## Available Functions and Classes

- [Year](https://www.npmjs.com/package/@ilihub/year)
- [Year To Millisecond](https://www.npmjs.com/package/@ilihub/year-to-millisecond)
- [Year To Second](https://www.npmjs.com/package/@ilihub/year-to-second)
- [Year To Minute](https://www.npmjs.com/package/@ilihub/year-to-minute)
- [Year To Hour](https://www.npmjs.com/package/@ilihub/year-to-hour)
- [Year To Day](https://www.npmjs.com/package/@ilihub/year-to-day)
- [Year To Week](https://www.npmjs.com/package/@ilihub/year-to-week)
- [Year To Month](https://www.npmjs.com/package/@ilihub/year-to-month)
- [Year To Decade](https://www.npmjs.com/package/@ilihub/year-to-decade)
- [Year To Century](https://www.npmjs.com/package/@ilihub/year-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
