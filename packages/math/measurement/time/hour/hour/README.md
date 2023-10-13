# @ilihub/hour

TypeScript functions for converting hour to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fhour?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fhour)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/hour)](https://socket.dev/npm/package/@ilihub/hour)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/hour

# or, if you're using npm
npm install @ilihub/hour

# or, if you're using yarn
yarn add @ilihub/hour
```

## Usage

```javascript
import { Hour } from "@ilihub/hour";

const hour = new Hour(1);

const milliseconds = hour.toMillisecond();
console.log(milliseconds); // 3600000

const seconds = hour.toSecond();
console.log(seconds); // 3600

const minutes = hour.toMinute();
console.log(minutes); // 60

const days = hour.toDay();
console.log(days); // 0.041666666666666664

const weeks = hour.toWeek();
console.log(weeks); // 0.005952380952380952

const months = hour.toMonth();
console.log(months); // 0.001388888888888889

const years = hour.toYear();
console.log(years); // 0.00011415525114155251

const decades = hour.toDecade();
console.log(decades); // 0.000011415525114155251

const centuries = hour.toCentury();
console.log(centuries); // 0.0000011415525114155251
```

## Available Functions and Classes

- [Hour](https://www.npmjs.com/package/@ilihub/hour)
- [Hour To Millisecond](https://www.npmjs.com/package/@ilihub/hour-to-millisecond)
- [Hour To Second](https://www.npmjs.com/package/@ilihub/hour-to-second)
- [Hour To Minute](https://www.npmjs.com/package/@ilihub/hour-to-minute)
- [Hour To Day](https://www.npmjs.com/package/@ilihub/hour-to-day)
- [Hour To Week](https://www.npmjs.com/package/@ilihub/hour-to-week)
- [Hour To Month](https://www.npmjs.com/package/@ilihub/hour-to-month)
- [Hour To Year](https://www.npmjs.com/package/@ilihub/hour-to-year)
- [Hour To Decade](https://www.npmjs.com/package/@ilihub/hour-to-decade)
- [Hour To Century](https://www.npmjs.com/package/@ilihub/hour-to-century)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
