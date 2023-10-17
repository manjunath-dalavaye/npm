# @ilihub/reaumur

TypeScript functions for converting Reaumur to other temperature units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Freaumur?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Freaumur)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/reaumur)](https://socket.dev/npm/package/@ilihub/reaumur)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/reaumur

# or, if you're using npm
npm install @ilihub/reaumur

# or, if you're using yarn
yarn add @ilihub/reaumur
```

## Usage

```javascript
import { Reaumur } from "@ilihub/reaumur";

const reaumur = new Reaumur(80);

const celcius = reaumur.toCelsius();
console.log(celcius); // 100

const fahrenheit = reaumur.toFahrenheit();
console.log(fahrenheit); // 212

const rankine = reaumur.toRankine();
console.log(rankine); // 671.67

const kelvin = reaumur.toKelvin();
console.log(kelvin); // 373.15
```

## Available Functions and Classes

- [Reaumur](https://www.npmjs.com/package/@ilihub/reaumur)
- [Reaumur To Kelvin](https://www.npmjs.com/package/@ilihub/reaumur-to-kelvin)
- [Reaumur To Celsius](https://www.npmjs.com/package/@ilihub/reaumur-to-celsius)
- [Reaumur To Fahrenheit](https://www.npmjs.com/package/@ilihub/reaumur-to-fahrenheit)
- [Reaumur To Rankine](https://www.npmjs.com/package/@ilihub/reaumur-to-rankine)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
