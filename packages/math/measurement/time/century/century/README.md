# @ilihub/century

TypeScript functions for converting century to other time units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcentury?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcentury)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/century)](https://socket.dev/npm/package/@ilihub/century)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/century

# or, if you're using npm
npm install @ilihub/century

# or, if you're using yarn
yarn add @ilihub/century
```

## Usage

```javascript
import { Century } from "@ilihub/century";

const century = new Century(1);

const millisecond = century.toMillisecond();
console.log(millisecond); // 3153600000000

const second = century.toSecond();
console.log(second); // 3153600000

const minute = century.toMinute();
console.log(minute); // 52560000

const hour = century.toHour();
console.log(hour); // 876000

const day = century.toDay();
console.log(day); // 36500

const week = century.toWeek();
console.log(week); // 5200

const month = century.toMonth();
console.log(month); // 1200

const year = century.toYear();
console.log(year); // 100

const decade = century.toDecade();
console.log(decade); // 10
```

## Available Functions and Classes

- [Century](https://www.npmjs.com/package/@ilihub/century)
- [Century To Millisecond](https://www.npmjs.com/package/@ilihub/century-to-millisecond)
- [Century To Second](https://www.npmjs.com/package/@ilihub/century-to-second)
- [Century To Minute](https://www.npmjs.com/package/@ilihub/century-to-minute)
- [Century To Hour](https://www.npmjs.com/package/@ilihub/century-to-hour)
- [Century To Day](https://www.npmjs.com/package/@ilihub/century-to-day)
- [Century To Week](https://www.npmjs.com/package/@ilihub/century-to-week)
- [Century To Month](https://www.npmjs.com/package/@ilihub/century-to-month)
- [Century To Year](https://www.npmjs.com/package/@ilihub/century-to-year)
- [Century To Decade](https://www.npmjs.com/package/@ilihub/century-to-decade)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
